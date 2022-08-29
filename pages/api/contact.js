const mailgun = require("mailgun-js")({
  domain: process.env.MAILGUN_DOMAIN,
  apiKey: process.env.MAILGUN_API_KEY,
});

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const data = req.body;

  mailgun.messages().send({
    from: `Contact Form <JamBot@${process.env.MAILGUN_DOMAIN}>`,
    to: process.env.MAILGUN_EMAIL,
    subject: "New Message!",
    text: `Name: "${data.name}"\nEmail: ${data.email}\nMessage:\n\n${data.message}`,
  });

  res.status(200).json({});
  return;
}
