import express from "express";
import { deposit, withdraw } from "../controller/transaction-controller.js";
import { verifyToken } from "../middleware/jwt-verify.js";

const transactionRouter = express.Router();

transactionRouter.post("/deposit", verifyToken, deposit);
transactionRouter.post("/withdraw", withdraw);

export default transactionRouter;
