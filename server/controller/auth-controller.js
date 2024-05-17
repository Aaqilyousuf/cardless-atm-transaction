import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import Mailgen from "mailgen";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { GenerateOtp } from "../utils/GenerateOtp.js";

dotenv.config();

// const GenerateOtp = () => {
//   let otp = "";
//   for (let i = 0; i < 4; i++) {
//     otp += Math.floor(Math.random() * 10);
//   }
//   return otp;
// };

let generatedOtp;

export const signin = (req, res) => {
  const { email } = req.body;
  generatedOtp = GenerateOtp();
  console.log("OTP sent to email: " + generatedOtp);
  let config = {
    host: "smtp.gmail.com",
    port: 587,
    service: "google",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  };
  let transporter = nodemailer.createTransport(config);

  let mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Mailgen",
      link: "https://mailgen.js/",
    },
  });
  let response = {
    body: {
      name: "OTP from ATM 24X7",
      intro: "Welcome to ATM 24X7 OTP received.",
      action: {
        instructions: "Copy your OTP",
        button: {
          color: "#22BC66", // Optional action button color
          text: generatedOtp,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
  let mail = mailGenerator.generate(response);

  let message = {
    from: process.env.EMAIL,
    to: email,
    subject: "OTP Received",
    html: mail,
  };
  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({ msg: "You should received an mail" });
    })
    .catch((err) => {
      return res.status(500).json({ msg: "something wrong here", err });
    });

  //   res.status(200).json({ msg: "Successfully created account" });
};

export const VerifyOtp = async (req, res) => {
  const {
    firstName,
    lastName,
    aadharNumber,
    PhoneNumber,
    ifscCode,
    dob,
    accountNumber,
    accountType,
    bank,
    branch,
    email,
    password,
    pin,
    joinedOtp,
  } = req.body;
  const data = {
    firstName,
    lastName,
    aadharNumber,
    PhoneNumber,
    ifscCode,
    dob,
    accountNumber,
    accountType,
    bank,
    branch,
    email,
    password,
    pin,
    joinedOtp,
  };
  console.log(data);
  console.log("Generated otp: " + generatedOtp);
  console.log("User typed OTP: " + joinedOtp);
  try {
    if (generatedOtp !== joinedOtp) {
      throw new Error("Invalid OTP!!!");
      // res.status(200);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: " User already exist!!!" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashedPin = bcrypt.hashSync(pin, salt);
      const hashedPassword = bcrypt.hashSync(password, salt);

      await User.create({
        firstName,
        lastName,
        dateOfBirth: dob,
        aadharNumber,
        phoneNumber: PhoneNumber,
        bank,
        accountType,
        branch,
        accountNumber,
        ifscCode,
        pin: hashedPin,
        email,
        password: hashedPassword,
      });
    }
    res.status(201).json({ msg: "User account created successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Error" + err.message });
  }
};

export const login = async (req, res) => {
  const { cardNumber, pin } = req.body;
  try {
    const loginUser = await User.findOne({ cardNumber });
    if (!loginUser) {
      return res.status(404).json({ msg: "User not found 404" });
    }
    console.log("Pin by user: " + pin);
    console.log("Hashed password: " + loginUser.pin);
    const isPinMatch = await bcrypt.compare(pin, loginUser.pin);
    if (isPinMatch) {
      const token = jwt.sign(
        {
          id: loginUser._id,
          userName: loginUser.firstName + loginUser.lastName,
          userEmail: loginUser.email,
          accountNumber: loginUser.accountNumber,
        },
        process.env.JWT_SECRET_KEY
      );
      console.log(token);
      return res.status(200).json({
        msg: "Card number and pin are correct. Successfully logged in",
        token: token,
      });
    } else {
      return res.status(401).json({ msg: "Wrong pin try again!!!" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Error" + err.message });
  }
};
