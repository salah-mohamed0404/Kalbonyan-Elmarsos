const express = require("express");
const User = require("../models/user");

const router = new express.Router();

router.post("/users", async function (req, res) {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/users/login", async function (req, res) {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (err) {
    res.status(400).send();
  }
});

router.get("/users", async function (req, res) {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/users/:id", async function (req, res) {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (err) {
    res.status(500).send();
  }
});

router.patch("/users/:id", async function (req, res) {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation)
    return res.status(404).send({ error: "Invalid update!" });

  try {
    const user = await User.findById(req.params.id);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    if (!user) return res.status(404).send();

    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/users/:id", async function (req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) return res.status(404).send();

    res.send(user);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
