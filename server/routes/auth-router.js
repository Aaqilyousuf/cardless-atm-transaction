import express from "express";
import { signin } from "../controller/auth-controller.js"; // Adjust the path as needed

const router = express.Router();

router.post("/signin", signin);
// router.post("/verifyOtp", verifyOtp);

export default router;
