import express from "express";
import { login, register } from "../controller/auth-controller.js";
import { VerifyOtp } from "../controller/auth-controller.js";
// Adjust the path as needed

const authRouter = express.Router();

authRouter.post("/signin", register);
authRouter.post("/verifyOtp", VerifyOtp);
authRouter.post("/login", login);

export default authRouter;
