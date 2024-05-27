import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const verifyToken = async (req, res, next) => {
  const token = req.header["authorization"];
  console.log(token);
  if (!token) {
    return res.status(401).json({ msg: "unauthorized ithula tha" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "unauthorized" });
  }
};
