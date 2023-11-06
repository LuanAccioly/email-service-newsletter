import Emails from "../models/Email/index.js";

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

  return res.status(200).json({ title: news.title, ip: ip });
};
