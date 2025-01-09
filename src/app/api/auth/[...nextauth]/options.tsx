import { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import DiscordProvider from 'next-auth/providers/discord';
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from 'next-auth/providers/email';
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { firestore } from "@/utils/firestore"

const isDev = process.env.NEXTAUTH_URL?.includes("localhost");

const OPTIONS: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: isDev ? process.env.NEXTAUTH_GITHUB_ID_DEV as string : process.env.NEXTAUTH_GITHUB_ID_PROD as string,
      clientSecret: isDev ? process.env.NEXTAUTH_GITHUB_SECRET_DEV as string : process.env.NEXTAUTH_GITHUB_SECRET_PROD as string,
    }),
    DiscordProvider({
      clientId: process.env.NEXTAUTH_DISCORD_ID as string,
      clientSecret: process.env.NEXTAUTH_DISCORD_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_ID as string,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
      allowDangerousEmailAccountLinking: true,
    }),
    EmailProvider({
      server: {
        host: process.env.NEXTAUTH_EMAIL_HOST,
        port: process.env.NEXTAUTH_EMAIL_PORT,
        auth: {
          user: process.env.NEXTAUTH_EMAIL_USER,
          pass: process.env.NEXTAUTH_EMAIL_PASS
        }
      },
      from: process.env.NEXTAUTH_EMAIL_FROM
    }),
  ],
  pages: {
    signIn: "/apply",
    error: "/apply",
    //signOut: "/apply",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: FirestoreAdapter(firestore),
};

export default OPTIONS;