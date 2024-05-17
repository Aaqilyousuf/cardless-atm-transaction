import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  bank: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: false,
  },
  accountNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  ifscCode: {
    type: Number,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
  },
});

export default mongoose.model("User", userSchema);
