const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email is invalid");
    },
  },
  // Challenge to make password field
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.length <= 6)
        throw new Error("The password must be more than 6");
      if (value.toLowerCase().includes("password"))
        throw new Error('The password mustn\'t contains "password"');
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Age must be a postive number");
    },
  },
});

module.exports = User;
