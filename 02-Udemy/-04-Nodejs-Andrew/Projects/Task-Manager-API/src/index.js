require("./db/mongoose");
const express = require("express");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", function (req, res) {
  const user = new User(req.body);

  user
    .save()
    .then(() => res.status(201).send(user))
    .catch((err) => res.status(400).send(err));
});

app.get("/users", function (req, res) {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send());
});

app.get("/users/:id", function (req, res) {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      if (!user) return res.status(404).send();

      res.send(user);
    })
    .catch((err) => res.status(500).send());
});

app.post("/tasks", function (req, res) {
  const task = new Task(req.body);

  task
    .save()
    .then(() => res.status(201).send(task))
    .catch((err) => res.status(400).send(err));
});

// Challenge
app.get("/tasks", function (req, res) {
  Task.find({})
    .then((tasks) => res.send(tasks))
    .catch((err) => res.status(400).send(err));
});

app.get("/tasks/:id", function (req, res) {
  const { id } = req.params;

  Task.findById(id)
    .then((task) => {
      if (!task) return res.status(404).send();

      res.send(task);
    })
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => console.log(`Server is up on port ${port}`));
