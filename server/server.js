import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
import router from "./routes/auth-router.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Sucessfully Running");
});

app.use("/api/auth", router);

mongoose
  .connect(process.env.MONGODB_CONFIG)
  .then(() => app.listen(process.env.PORT || 8080))
  .then(() =>
    console.log(
      `Connected to DataBase and Listenig PORT ${process.env.PORT} AND Running on http://localhost:8080/ `
    )
  )
  .catch((error) => console.log(error));
