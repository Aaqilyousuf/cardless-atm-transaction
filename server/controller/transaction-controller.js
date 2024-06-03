import User from "../models/User.js";

export const deposit = async (req, res) => {
  try {
    const { amount } = req.body;
    const userId = req.userId;
    const authHeader = req.headers["authorization"];

    console.log("this is from controller: ", userId);

    const updateUserBalance = await User.findByIdAndUpdate(
      { _id: userId },
      { $inc: { balance: amount } },
      { new: true }
    );
    req.json({ updatedBalance: updateUserBalance.balance });
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const withdraw = async (req, res) => {};
