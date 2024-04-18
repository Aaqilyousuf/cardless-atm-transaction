import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import Mailgen from "mailgen";

dotenv.config();

export const signin = (req, res) => {
  let {
    firstName,
    lastName,
    dob,
    aadharNumber,
    PhoneNumber,
    bank,
    accountType,
    branch,
    accountNumber,
    ifscCode,
    pin,
    email,
    password,
    otp,
    generatedOtp,
  } = req.body;
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
  if (generatedOtp === otp) {
    res.status(200).json({ msg: "Email verified successfully" });
  } else {
    res.status(500).json({ msg: "Invalid OTP!" });
  }

  //   res.status(200).json({ msg: "Successfully created account" });
};

// export const verifyOtp = () => {
//   let {
//     firstName,
//     lastName,
//     dob,
//     aadharNumber,
//     PhoneNumber,
//     bank,
//     accountType,
//     branch,
//     accountNumber,
//     ifscCode,
//     pin,
//     email,
//     password,
//     otp,
//     generatedOtp,
//   } = req.body;

// };
