const nodemailer = require("nodemailer");
require("dotenv").config();
const fs = require('fs').promises;

const server = {
  host: process.env.NEXTAUTH_EMAIL_HOST,
  port: Number(process.env.NEXTAUTH_EMAIL_PORT),
  auth: {
    user: process.env.NEXTAUTH_EMAIL_USER,
    pass: process.env.NEXTAUTH_EMAIL_PASS
  }
};

const transporter = nodemailer.createTransport(server);

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
			from: '"KU Blockchain" <communications@kublockchain.com>', // sender address
			to: email, // list of receivers
			subject: `Subject Line`, // subject line
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
 */
function html(params) {
  const { name, email } = params

  return `
<body style="background: #fff;">
	<p>Insert Email HTML body here</p>
</body>
`
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) **/
function text(params) {
  const { name, email } = params
  return `Insert Email Text body here`;
}

main().catch(console.error);
