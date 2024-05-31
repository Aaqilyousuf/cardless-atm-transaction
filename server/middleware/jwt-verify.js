import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  // console.log("secret key: ", process.env.JWT_SECRET_KEY);
  // console.log("Request Headers:", req.headers);
  // const authHeader = req.headers["authorization"];
  // console.log("Authorization Header:", authHeader);
  if (!authHeader) {
    return res.status(401).json({ msg: "unauthorized ithula tha" });
  }
  let token;
  if (authHeader.startsWith("Bearer")) {
    token = authHeader.split("")[1];
  } else {
    token = authHeader;
  }
  console.log("extracted token: ", token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.error("here is error: ", err);
    return res.status(401).json({ msg: "unauthorized" });
  }
};
