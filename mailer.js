const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

const generateHtmlTemplate = ({ title, message, footer }) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
        color: #333;
      }
      .container {
        background-color: #ffffff;
        max-width: 600px;
        margin: auto;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #eaeaea;
      }
      .header h1 {
        margin: 0;
        color: #0d6efd;
      }
      .message {
        padding: 20px 0;
        font-size: 16px;
        line-height: 1.6;
      }
      .footer {
        font-size: 13px;
        color: #999;
        text-align: center;
        border-top: 1px solid #eaeaea;
        padding-top: 15px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>${title}</h1>
      </div>
      <div class="message">
        ${message}
      </div>
      <div class="footer">
        ${footer}
      </div>
    </div>
  </body>
</html>
`;

module.exports.sendBeautifulEmail = async ({ to, subject, message }) => {
  const html = generateHtmlTemplate({
    title: subject,
    message,
    footer: "This message was sent by system no need to reply",
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM_ADDRESS,
      to,
      subject,
      html,
      text: message, // fallback for plain text email clients
    });
    console.log(`📨 Email sent to ${to}`);
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
  }
};
