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
      sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        sendVerificationRequest({
          identifier: email,
          url,
          provider: { server, from },
        });
      }
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

async function sendVerificationRequest(params: { identifier: any; url: any; provider: any; }) {
  const { identifier, url, provider } = params
  const { host } = new URL(url)
  // NOTE: You are not required to use `nodemailer`, use whatever you want.
  const transport = createTransport(provider.server)
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Your magic link is here 🪄✨`,
    text: text({ url, host }),
    html: html({ url, host }),
  })
  const failed = result.rejected.filter(Boolean)
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
  }
}

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
function html(params: { url: string, host: string }) {
  const { url, host } = params

  //const escapedHost = host.replace(/\./g, "&#8203;.")

  const brandColor = "#346df1"

  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: "#fff",
  }

  return `
<body style="background: ${color.background};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Sign in to <strong>your ✨application portal✨</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        If you did not request this email you can safely ignore it. Add kublockchain.com to your email contacts to ensure you receive future emails from us.
      </td>
    </tr>
  </table>
</body>
`
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string, host: string }) {
  return `Sign in to The Midwest Block-a-Thon Application Portal\n${url}\n\n`
}

export default OPTIONS;