const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  combleted: { type: Boolean, default: false },
});

module.exports = Task;
