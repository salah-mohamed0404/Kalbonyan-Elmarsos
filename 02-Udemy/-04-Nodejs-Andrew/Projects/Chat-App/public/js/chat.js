const socket = io();

socket.on("message", (message) => console.log(message));

document.getElementById("message-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const message = e.target.elements.message;

  socket.emit("sendMessage", message);
});
