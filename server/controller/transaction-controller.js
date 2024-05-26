import User from "../models/User.js";

export const deposit = async (req, res) => {
  try {
    const { amount } = req.body;
    const userId = req.userId;

    const updateUserBalance = await User.findByIdAndUpdate();
  } catch (err) {}
};
export const withdraw = async (req, res) => {};
