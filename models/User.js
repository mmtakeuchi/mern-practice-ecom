const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please eter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please ener a valid email"],
  },
  password: {
    type: String,
    require: [true, "Please enter a valid password"],
    minLength: [6, "Minimum password length must be 6 characters"],
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);