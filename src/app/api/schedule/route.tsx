import { google } from 'googleapis';
import { NextResponse } from 'next/server';

interface ScheduleItem {
  display: string;
  full_date: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  tags: string[];
  calendar_link: string;
}

export async function GET() {
  const returnData: ScheduleItem[] = [];

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
 
  try {
    const schedule = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SCHEDULE_SHEET_ID,
      range: 'Sheet1!A:I',
    });

    if (!schedule.data.values) {
      return NextResponse.json({ message: 'No data found' }, { status: 404 });
    }

    const rows = schedule.data.values.slice(1); // Skip the first row
    for (const row of rows) {
      const item: ScheduleItem = {
      display: row[0],
      full_date: row[1],
      title: row[2],
      description: row[3],
      start_time: row[4],
      end_time: row[5],
      location: row[6],
      tags: row[7].split(', '),
      calendar_link: row[8],
      };

      if (item.display === 'TRUE') {
        returnData.push(item);
      }
    }
    return NextResponse.json({ message: 'Successfully fetched!', data: returnData });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};
