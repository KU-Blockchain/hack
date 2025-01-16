import { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import DiscordProvider from 'next-auth/providers/discord';
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from 'next-auth/providers/email';
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { firestore } from "@/utils/firestore";
import { createTransport } from "nodemailer";

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
        port: Number(process.env.NEXTAUTH_EMAIL_PORT),
        auth: {
          user: process.env.NEXTAUTH_EMAIL_USER,
          pass: process.env.NEXTAUTH_EMAIL_PASS
        }
      },
      from: process.env.NEXTAUTH_EMAIL_FROM,
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        //const { identifier, url, provider } = params
        // NOTE: You are not required to use `nodemailer`, use whatever you want.
        const transport = createTransport(server)
        const result = await transport.sendMail({
          to: email,
          from: from,
          subject: `Your magic link is here 🪄✨`,
          text: text({ url }),
          html: html({ url }),
        })
        const failed = result.rejected.filter(Boolean)
        if (failed.length) {
          throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
        }
      }
    }),
  ],
  pages: {
    signIn: "/apply",
    error: "/apply",
    verifyRequest: "/apply?request=verify",
    signOut: "/apply?signout=true",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: FirestoreAdapter(firestore),
};

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
function html(params: { url: string }) {
  const { url } = params

  return `
<body style="background: #fff;">
	<table width="100%" border="0" cellspacing="20" cellpadding="0"
		style="background: #ffedd5; max-width: 600px; margin: auto; border-radius: 20px;">
		<tr>
			<td align="center"
				style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
				Sign in to <strong>your ✨application portal✨</strong>
			</td>
		</tr>
		<tr>
			<td align="center" style="padding: 20px 0;">
				<table border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" style="border-radius: 5px;" bgcolor="#fed7aa"><a
								href="${url}" target="_blank"
								style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: #3b301b; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid #fed7aa; display: inline-block; font-weight: bold;">
                Sign in</a></td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td align="center"
				style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
				If you did not request this email you can safely ignore it. <br /> Add hack@kublockchain.com to your safe senders to ensure you receive future emails from us.
      </td>
		</tr>
	</table>
	<footer style="padding: 15px 0 0 25px;">
		<p style="font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
			<i><b><u>The Midwest Block-a-Thon 2025</u></b></i> - a hackathon for innovators <br />
	    1536 W 15th St, Lawrence, KS 66045 <br />
      Made with 🔥 by KU Blockchain Institute
    </p>
	</footer>
</body>
`
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url }: { url: string}) {
  return `Sign in to The Midwest Block-a-Thon Application Portal\n${url}\n\n`
}

export default OPTIONS;