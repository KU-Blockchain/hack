import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_ID_DEV as string,
      clientSecret: process.env.NEXTAUTH_GITHUB_SECRET_DEV as string,
    }),
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };