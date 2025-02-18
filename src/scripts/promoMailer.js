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

	const jsonFilePath = 'src/scripts/promoList.json';
	const jsonData = await readJsonFile(jsonFilePath);

	for (const item of jsonData) {
		const email = item.email;

		console.log("Sending email to", email);

		const info = await transporter.sendMail({
			from: '"KU Blockchain" <hack@kublockchain.com>', // sender address
			to: email, // list of receivers
			subject: `Web3 Hackathon for you 🔥`, // Subject line
			text: text({ email }),
			html: html({ email }),
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
  const { email } = params

  return `
<body style="background: #fff;">
	<a style="display: flex; justify-content: center;" href="https://hack.kublockchain.com">
		<img style="width: 70%;" src="https://hack.kublockchain.com/logo_horizontal.png">
	</a>
		<table width="100%" border="0" cellspacing="20" cellpadding="0"
			style="background: #ffedd5; max-width: 600px; margin: auto; border-radius: 20px;">
			<tr>
				<td align="left"
					style="padding: 10px 0px; font-size: 19px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
					<strong>Have you ever thought about <i>how</i> crypto works? </strong> <br /><br />
          You're in luck! The University of Kansas Blockchain Institute is excited to host the first and only
					<b><i><u>Midwest Block-a-Thon</b></i></u>, a weekend-long blockchain and web3 hackathon for
					<u>beginners</u> to
					<u>experts</u>.
					<br></br>
					We're partnering with globally-recognized web3 companies for an incredible weekend of technical workshops, 
					networking, project building, and, of course, unlimited free food.
				</td>
			</tr>
			<tr>
				<td align="center" style="padding: 10px 0;">
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" style="border-radius: 5px;" bgcolor="#fed7aa">
								<a href="https://hack.kublockchain.com"
									style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: #3b301b; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid #fed7aa; display: inline-block; font-weight: bold;">
									JOIN TODAY
								</a>
							</td>
						</tr>
					</table>
					<p
						style="padding: 0px 0px; font-size: 11px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
						The Midwest Block-a-Thon is proud to be a Major League Hacking 2025 member event, the official
						student hackathon league.
					</p>
				</td>
			</tr>
			<tr>
				<td align="left"
					style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
					Why should YOU join?
					<ul>
						<li>🌯 Eat amazing free food</li>
						<li>📈 Boost your resume with a project</li>
						<li>💡 Learn something new</li>
						<li>🎉 Compete to win out of our >$4,000 prize pool!</li>
					</ul>
				</td>
			</tr>
			<tr>
				<td align="left"
					style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
					At a glance:
					<ul>
						<li><b><i><u>When</b></i></u>: Saturday, March 29th at 2pm — Sunday, March 30th at 4pm</li>
						<li><b><i><u>Where</b></i></u>: University of Kansas, School of Engineering</li>
						<li><b><i><u>Who</b></i></u>: Community members (ages 14+) with an interest in technology, programming, and
							blockchain (no experience required!)</li>
					</ul>
				</td>
			</tr>
		</table>
		<footer style="padding: 15px 0 0 25px;">
			<p style="font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
				Reply to this email if you'd like to get in touch with our organizing team!<br></br>
				<i><b><u>The Midwest Block-a-Thon 2025</u></b></i> - a hackathon for innovators <br />
	    1536 W 15th St, Lawrence, KS 66045 <br />
      Made with 🔥 by KU Blockchain Institute <br />
				<p style="font-size: 12px; font-family: Helvetica, Arial, sans-serif; color: #3b301b;">
					This email was meant to be sent to ${email}. You're receiving this email because you are
          on the distribution list for The Midwest Block-a-Thon 2025.
				</p>
			</p>
		</footer>
</body>
`
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text(params) {
  const { email } = params
  return `
  Have you ever thought about how crypto works?\n\n
  You're in luck! The University of Kansas Blockchain Institute is excited to host the first and only
  Midwest Block-a-Thon, a weekend-long blockchain and web3 hackathon for beginners to experts.
  We'll have technical workshops, networking, project building, and, of course, unlimited free food.\n\n
  Come win out of our >$4,000 prize pool! \n\n
  Mark your calendar for March 29-30, and join here: https://hack.kublockchain.com}\n\n`
}

main().catch(console.error);
