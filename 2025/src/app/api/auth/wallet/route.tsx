// Next.js API route support: https://nextjs.org/docs/app/api-reference
import { NextRequest, NextResponse } from 'next/server';
import OPTIONS from "../[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { google } from 'googleapis';

export async function GET(request: NextRequest) {
  const session = await getServerSession(OPTIONS);
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!session) {
    return NextResponse.json({ message: 'Not signed in' }, { status: 401 });
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

  if (checkUser.data.values && email) {
    for (const [index, row] of checkUser.data.values.entries()) {
      if (row[0] === email.toLowerCase()) {
        const rowIndex = index + 1; // convert 0-based index to 1-based row number
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.GOOGLE_APPLICANTS_SPREADSHEET_ID,
          range: `Sheet1!AD${rowIndex}`, // ensure exact row, column retrieval
        });
  
        if (response.data.values && response.data.values.length > 0) {
          const walletId = response.data.values[0][0]; // get the exact cell value
          const walletIdSlice = `${walletId.slice(0, 5)}...${walletId.slice(-5)}`; // format output
          
          return NextResponse.json({ walletId: walletIdSlice }, { status: 200 });
        }
        break;
      }
    }
  }  

  return NextResponse.json({ walletId: null }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(OPTIONS);
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!session) {
    return NextResponse.json({ message: 'You must be signed in to add your wallet ID' }, { status: 401 });
  }

  const walletId = await request.text();

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

  if (checkUser.data.values && email) {
    for (const row of checkUser.data.values) {
      if (row[0] === email.toLowerCase()) {
        const rowIndex = checkUser.data.values.indexOf(row) + 1; // convert 0-based index to 1-based row number
        const response = await sheets.spreadsheets.values.update({
          spreadsheetId: process.env.GOOGLE_APPLICANTS_SPREADSHEET_ID,
          range: `Sheet1!AD${rowIndex}`,
          valueInputOption: 'RAW',
          requestBody: {
            values: [[walletId]],
          },
        });
  
        console.log(response);
        return NextResponse.json({ message: 'Wallet ID added' }, { status: 200 });
      }
    }
  }
  

  return NextResponse.json({ message: 'No such user exists' }, { status: 200 });
}