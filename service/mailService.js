const nodemailer = require("nodemailer");
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

const sendEmail = async (req) => {
  const { from, to, subject, text } = await req.json();
  const transporter = createTransporter();
  const info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
  });

  return info;
};

module.exports = { sendEmail };
