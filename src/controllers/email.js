import Emails from "../models/Email/index.js";
import { buildEmail } from "../templates/emailHTML.js";

export const getEmails = async (_, res) => {
  const emails = await Emails.find();
  const responseBody = {
    data: emails,
  };
  res.status(200).json(responseBody);
};

export const sendNews = async (req, res) => {
  const news = req.body;
  const ip = req.ip;

  console.log("Notícia recebida: ", news.title);
  const emailHTML = buildEmail(news);

  console.log(emailHTML);
  return res.status(200).json({ HTML: emailHTML });
};
