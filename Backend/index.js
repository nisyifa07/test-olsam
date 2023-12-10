import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database connected");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(8000, () => console.log("Server running on 8000"));
