const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

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

const me = new User({
  name: "   Salah   ",
  email: "SALAH@MOHAMED.COM",
  password: 1556456465454,
});

me.save()
  .then(() => console.log(me))
  .catch((err) => console.log("Error", err));

// Challenge
const Task = mongoose.model("Tasks", {
  description: {
    type: String,
  },
  combleted: Boolean,
});

// const newTask = new Task({
//   description: "Play with my brother",
//   combleted: false,
// });

// newTask
//   .save()
//   .then(() => console.log(newTask))
//   .catch((err) => console.log(err));
