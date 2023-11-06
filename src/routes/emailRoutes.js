import { getEmails, sendNews } from "../controllers/email.js";
import express from "express";
import * as dotenv from "dotenv";

const router = express.Router();

dotenv.config();

router.get("/email/all", getEmails);
router.post("/email/send", sendNews);

export default router;
