import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth-router.js";
import transactionRouter from "./routes/transaction-route.js";
// import verifyRouter from "./routes/authRoute-verifyOtp.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Sucessfully Running so server is still alive");
});
app.get("/api/auth", (req, res) => {
  res.send("this is from auth side!!!");
});
app.get("/api/transaction", (req, res) => {
  res.send("this is from transaction side!!!");
});

app.use("/api/auth", authRouter);
app.use("/api/transaction", transactionRouter);

mongoose
  .connect(process.env.MONGODB_CONFIG)
  .then(() => app.listen(process.env.PORT || 8080))
  .then(() =>
    console.log(
      `Connected to DataBase and Listenig PORT ${process.env.PORT} AND Running on http://localhost:8080/ `
    )
  )
  .catch((error) => console.log(error));
