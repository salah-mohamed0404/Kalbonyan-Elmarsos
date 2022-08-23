const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: "Salah",
//   age: 18,
// });

// me.save()
//   .then(() => console.log(me))
//   .catch((err) => console.log("Error", err));

// Challenge
const Task = mongoose.model("Tasks", {
  description: {
    type: String,
  },
  combleted: Boolean,
});

const newTask = new Task({
  description: "Play with my brother",
  combleted: false,
});

newTask
  .save()
  .then(() => console.log(newTask))
  .catch((err) => console.log(err));
