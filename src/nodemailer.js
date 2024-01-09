import nodeMailer from "nodemailer";
import { v4 as uuid } from "uuid";
import * as dotenv from "dotenv";

dotenv.config();

const transport = nodeMailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: process.env.OUTLOOK_USER,
    pass: process.env.OUTLOOK_PASS,
  },
});

function mailOptions(html, bcc, subject) {
  return {
    from: "UFRPE Newsletter <ufrpenewsletter@outlook.com>",
    bcc,
    subject,
    html,
    headers: {
      "X-Entity-Ref-ID": uuid(),
      "Content-Language": "pt-br",
    },
  };
}

export function sendEmail(emailHTML, bcc, title) {
  transport.sendMail(
    mailOptions(emailHTML, bcc, title),
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    }
  );
}
