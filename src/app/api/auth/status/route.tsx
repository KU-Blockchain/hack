import { NextRequest, NextResponse } from 'next/server';
import OPTIONS from "../[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { google } from 'googleapis';

export async function GET(request: NextRequest) {
  const session = await getServerSession(OPTIONS);
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!session) {
    return NextResponse.json({ message: 'Not signed in', joined: true }, { status: 401 });
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const checkUser = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_APPLICANTS_SPREADSHEET_ID,
    range: 'Sheet1!E:E',
  });

  let row = 0;

  if (checkUser.data.values && email) {
    for (let i = 0; i < checkUser.data.values.length; i++) {
      if (checkUser.data.values[i][0] === email.toLowerCase()) {
        row = i + 1;
        break;
      }
    }
  }

  const getApplicationStatus = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_APPLICANTS_SPREADSHEET_ID,
    range: `Sheet1!A${row}:E${row}`,
  });

  if (getApplicationStatus.data.values) {
    return NextResponse.json({ values: getApplicationStatus.data.values }, { status: 200 });
  }
  return NextResponse.json({ values: 'Not Found' }, { status: 200 });
}