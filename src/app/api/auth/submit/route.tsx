// Next.js API route support: https://nextjs.org/docs/app/api-reference
import { NextRequest, NextResponse } from 'next/server';
import OPTIONS from "../[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { google } from 'googleapis';

type ChaperoneInfo = {
  chaperone_name: string;
  chaperone_email: string;
};

type EducationBase = {
  [key: string]: string; 
};

type EducationLevel<T extends EducationBase> = T; // generics to make education levels reusable

interface HighSchool extends EducationBase {
  name: string;
  year: string;
}

interface College extends EducationBase {
  name: string;
  year: string;
  study: string;
  graduation: string;
}

interface Community extends EducationBase {
  company: string;
  field: string;
}

interface ApplicationForm {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  t_shirt: string;
  linkedin: string;
  portfolio: string;
  resume: string;
  experience_level: string;
  education_level: {
    high_school: EducationLevel<HighSchool>;
    college: EducationLevel<College>;
    community: EducationLevel<Community>;
  };
  age: string;
  chaperone: ChaperoneInfo;
  dietary: string;
  accommodations: string;
  code_of_conduct: string;
  mlh_privacy_policy: string;
  terms_conditions: string;
  email_opt_in: string;
}


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

  if (checkUser.data.values && email) {
    for (const row of checkUser.data.values) {
      if (row[0] === email.toLowerCase()) {
        return NextResponse.json({ joined: true }, { status: 200 });
      }
    }
  }

  return NextResponse.json({ joined: false }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json({ message: 'You must be signed in to submit an application' }, { status: 401 });
  }

  const formData = await request.formData();

  const applicationForm: ApplicationForm = {
    first_name: formData.get('first-name') as string,
    last_name: formData.get('last-name') as string,
    email: formData.get('email') as string,
    country: formData.get('country') as string,
    t_shirt: formData.get('t-shirt') as string,
    linkedin: formData.get('linkedin') as string,
    portfolio: formData.get('portfolio') as string,
    resume: formData.get('resume') as string,
    experience_level: formData.get('experience-level') as string,
    education_level: {
      high_school: {
        name: formData.get('high_school_name') as string,
        year: formData.get('high_school_year') as string,
      },
      college: {
        name: formData.get('university') as string,
        year: formData.get('year') as string,
        study: formData.get('study') as string,
        graduation: formData.get('graduation') as string,
      },
      community: {
        company: formData.get('company') as string,
        field: formData.get('field') as string,
      },
    },
    age: formData.get('age') as string,
    chaperone: {
      chaperone_name: formData.get('chaperone-name') as string,
      chaperone_email: formData.get('chaperone-email') as string,
    },
    dietary: formData.get('dietary') as string,
    accommodations: formData.get('accommodations') as string,
    code_of_conduct: formData.get('code-of-conduct') as string,
    mlh_privacy_policy: formData.get('mlh-privacy-policy') as string,
    terms_conditions: formData.get('terms-conditions') as string,
    email_opt_in: formData.get('email-opt-in') as string,
  };
  
  console.log(applicationForm);
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const date = new Date();
  const timestamp = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const education_level = applicationForm.education_level.high_school.name ? 'High School' : applicationForm.education_level.college.name ? 'College' : 'Community';

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_APPLICANTS_SPREADSHEET_ID,
    range: `Sheet1!A1`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [
        [
          "Pending",
          timestamp,
          applicationForm.first_name,
          applicationForm.last_name,
          applicationForm.email,
          applicationForm.country,
          applicationForm.t_shirt,
          applicationForm.linkedin,
          applicationForm.portfolio,
          applicationForm.resume,
          applicationForm.experience_level,
          education_level,
          applicationForm.education_level.high_school.name,
          applicationForm.education_level.high_school.year,
          applicationForm.education_level.high_school.dob,
          applicationForm.education_level.high_school.chaperone,
          applicationForm.education_level.high_school.chaperone_email,
          applicationForm.education_level.college.name,
          applicationForm.education_level.college.year,
          applicationForm.education_level.college.study,
          applicationForm.education_level.college.graduation,
          applicationForm.education_level.community.company,
          applicationForm.education_level.community.field,
          applicationForm.age,
          applicationForm.chaperone.chaperone_name,
          applicationForm.chaperone.chaperone_email,
          applicationForm.dietary,
          applicationForm.accommodations,
          applicationForm.code_of_conduct,
          applicationForm.mlh_privacy_policy,
          applicationForm.terms_conditions,
          applicationForm.email_opt_in,
        ],
      ],
    },
  });

  console.log(response);

  return NextResponse.json({ message: 'Application submitted' }, { status: 200 });
}