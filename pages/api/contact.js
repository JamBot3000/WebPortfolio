//? is validation necessary? even if i add email validation a fake one can be supplied etc
//* XSS in my inbox won't work, JS is disabled

const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);

const client = mailgun.client({
  username: "JamBot",
  key: process.env.MAILGUN_API_KEY,
});

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const formData = req.body;
  const messageData = {
    from: `Contact Form <JamBot@${process.env.MAILGUN_DOMAIN}>`,
    to: process.env.MAILGUN_EMAIL,
    subject: "New Message!",
    text: `Name: "${formData.name}"\nEmail: ${formData.email}\nMessage:\n\n${formData.message}`,
  };

  client.messages
    .create(process.env.MAILGUN_DOMAIN, messageData)
    .then((apiRes) => {
      if (apiRes.status == 200) {
        res.status(200).json({ text: "Email Sent" });
      } else {
        res.status(200).json({ text: "Unable to send email at this time" });
      }
    })
    .catch((err) => {
      throw err;
    });

  return;
}
