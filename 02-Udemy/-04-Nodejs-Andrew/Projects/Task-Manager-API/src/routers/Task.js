const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/tasks", auth, async function (req, res) {
  const task = new Task({ ...req.body, owner: req.user._id });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Challenge
router.get("/tasks", auth, async function (req, res) {
  const match = {};

  if (req.query.completed) match.completed = req.query.completed === "true";

  try {
    await req.user
      .populate({
        path: "tasks",
        match,
      })
      .execPopulate();
    res.send(req.user.tasks);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/tasks/:id", auth, async function (req, res) {
  const { id } = req.params;

  try {
    const task = await Task.findOne({ _id: id, owner: req.user._id });

    if (!task) return res.status(404).send();

    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Challenge
router.patch("/tasks/:id", auth, async function (req, res) {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation)
    return res.status(400).send({ error: "Invalid update!" });

  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    console.log(task, updates);

    if (!task) return res.status(404).send();

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Challenge
router.delete("/tasks/:id", auth, async function (req, res) {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) return res.status(404).send();

    res.send(task);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
