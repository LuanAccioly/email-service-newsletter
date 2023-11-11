import Emails from "../models/Email/index.js";
import { sendEmail } from "../nodemailer.js";
import { buildEmail } from "../templates/emailHTML.js";

export const getEmails = async (_, res) => {
  const emails = await Emails.find();
  const responseBody = {
    data: emails[0].emails,
  };
  res.status(200).json(responseBody);
};

export const sendNews = async (req, res) => {
  const news = req.body;
  const emailHTML = buildEmail(news);
  const emails = await Emails.find();
  const listOfEmails = emails[0].emails;

  console.log("Notícia recebida: ", news.title);

  sendEmail(emailHTML, listOfEmails, news.title);

  return res.status(200).json({ HTML: emailHTML });
};
