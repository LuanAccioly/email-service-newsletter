import emailRoutes from "./routes/emailRoutes.js";

import express from "express";
import cors from "cors";
import db from "./db.js";
const app = express();

db();
app.use(express.json());
app.use(cors());
app.use("/", emailRoutes);
app.listen(8800);
