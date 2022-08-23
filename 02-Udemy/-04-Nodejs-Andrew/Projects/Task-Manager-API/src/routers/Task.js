const express = require("express");
const Task = require("../models/task");

const router = new express.Router();

router.post("/tasks", async function (req, res) {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Challenge
router.get("/tasks", async function (req, res) {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/tasks/:id", async function (req, res) {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).send();
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Challenge
router.patch("/tasks/:id", async function (req, res) {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation)
    return res.status(404).send({ error: "Invalid update!" });

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) return res.status(404).send();

    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Challenge
router.delete("/tasks/:id", async function (req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) return res.status(404).send();

    res.send(task);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
