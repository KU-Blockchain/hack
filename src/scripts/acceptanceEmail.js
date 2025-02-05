//const nodemailer = require("nodemailer");
//require("dotenv").config();
//const fs = require('fs').promises;

const server = {
  host: process.env.NEXTAUTH_EMAIL_HOST,
  port: Number(process.env.NEXTAUTH_EMAIL_PORT),
  auth: {
    user: process.env.NEXTAUTH_EMAIL_USER,
    pass: process.env.NEXTAUTH_EMAIL_PASS
  }
};

const transporter = nodemailer.createTransport(server);

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object

	async function readJsonFile(filePath) {
		const data = await fs.readFile(filePath, 'utf8');
		return JSON.parse(data);
	}

	const jsonFilePath = 'src/scripts/applicants.json';
	const jsonData = await readJsonFile(jsonFilePath);

	for (const item of jsonData) {
		const name = item.name;
		const email = item.email;

		console.log("Sending email to", name, email);

		const info = await transporter.sendMail({
			from: '"KU Blockchain" <hack@kublockchain.com>', // sender address
			to: email, // list of receivers
			subject: `${name}, you're in! 🎉`, // Subject line
			text: text({ name, email }),
			html: html({ name, email }),
		});

		console.log("Message sent: %s", info.messageId);
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
function html(params) {
  const { name, email } = params

  return `
<body style="background: #fff;">
	<table width="100%" border="0" cellspacing="20" cellpadding="0"
		style="background: #ffedd5; max-width: 600px; margin: auto; border-radius: 20px;">
		<tr>
			<td align="center"
				style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
				<strong>🎉 Welcome, ${name} 🎉</strong> <br /><br />
        You're going to The Midwest Block-a-Thon!
			</td>
		</tr>
		<tr>
			<td align="center" style="padding: 10px 0;">
				<table border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" style="border-radius: 5px;" bgcolor="#fed7aa">
							<a href="${process.env.NEXT_PUBLIC_DISCORD_LINK}"
								style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: #3b301b; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid #fed7aa; display: inline-block; font-weight: bold;">
								Join our Discord
							</a>
						</td>
					</tr>
				</table>
				<p
					style="padding: 0px 0px; font-size: 11px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
					*this link is unique, please do not share*</br></br>
          Joining the server using this link gives you an
					attendee role. If you are already in the KUBI server, this may not work. Please reply to this email
					with your Discord username so we can assign you the role!</p>
			</td>
		</tr>
		<tr>
			<td align="left"
				style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
				What's next?
				<ul>
					<li>Mark your calendar for <a
							href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDV0azQ2ZTJhdWVoODJzZDUxcXVyM2NwZW4ga3UuYmxvY2tjaGFpbi5pbnN0aXR1dGVAbQ&tmsrc=ku.blockchain.institute%40gmail.com">Saturday
							and Sunday, March 29-30, 2025</a>!</li>
					<li>Join our community <a href="${process.env.NEXT_PUBLIC_DISCORD_LINK}">Discord</a> server</li>
					<li>Check out learning resources on our <a
							href="https://hack.kublockchain.com/hackerdoc/151dd445c69b80098be5f78f9a6b5ae2#178dd445c69b8038aa1ed972fcd1a54e">HackerDoc</a>
					</li>
					<li>Attend a pre-event virtual workshop in March, stay tuned!</li>
				</ul>
			</td>
		</tr>
	</table>
	<footer style="padding: 15px 0 0 25px;">
		<p style="font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
			<i><b><u>The Midwest Block-a-Thon 2025</u></b></i> - a hackathon for innovators <br />
	    1536 W 15th St, Lawrence, KS 66045 <br />
      Made with 🔥 by KU Blockchain Institute <br />
			<p style="font-size: 12px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
				This email was meant to be sent to ${email}. Add hack@kublockchain.com to your safe senders to ensure
				you receive future emails from us.
			</p>
		</p>
	</footer>
</body>
`
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text(params) {
  const { name, email } = params
  return `
  🎉 Welcome, ${name} 🎉\n\n
  You've been accepted into The Midwest Block-a-Thon. Mark your calendar for March 29-30, and join our community Discord server here: ${process.env.NEXT_PUBLIC_DISCORD_LINK}}\n\n`
}

main().catch(console.error);
