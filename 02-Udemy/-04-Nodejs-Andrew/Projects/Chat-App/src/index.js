const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const Filter = require("bad-words");
const { generateMessage } = require("../src/utils/messages");
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  socket.on("join", ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", generateMessage(user.username, "Welcome!"));
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        generateMessage(user.username, `${user.username} has joined!`)
      );

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const filter = new Filter();
    const user = getUser(socket.id);

    if (filter.isProfane(message)) {
      return callback("profanity is not allowed!");
    }

    io.to(user.room).emit("message", generateMessage(user.username, message));
    callback();
  });

  socket.on("sendLocation", (coords, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit(
      "sendLocation",
      generateMessage(
        user.username,
        `https://www.google.com/maps?q=${coords.lat},${coords.long}`
      )
    );
    callback();
  });

  socket.on("disconnect", () => {
    const user = getUser(socket.id);

    if (user) {
      removeUser(socket.id);
      io.to(user.room).emit(
        "message",
        generateMessage(user.username, `${user.username} has left!`)
      );
    }
  });
});

server.listen(port, () => console.log(`Server is up on port ${port}!`));
