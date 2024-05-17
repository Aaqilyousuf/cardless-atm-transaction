import express from "express";
import { login, signin } from "../controller/auth-controller.js";
import { VerifyOtp } from "../controller/auth-controller.js";
// Adjust the path as needed

const authRouter = express.Router();

authRouter.post("/signin", signin);
authRouter.post("/verifyOtp", VerifyOtp);
authRouter.post("/login", login);

export default authRouter;
