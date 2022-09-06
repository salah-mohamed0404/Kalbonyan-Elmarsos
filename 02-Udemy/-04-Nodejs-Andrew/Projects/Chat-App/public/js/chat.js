const socket = io();

socket.on("message", (message) => console.log(message));

document.getElementById("message-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const message = e.target.elements.message.value;

  socket.emit("sendMessage", message, (error) =>
    error ? console.log(error) : console.log("message was delivered!")
  );
});

document.getElementById("send-location").addEventListener("click", () => {
  if (!navigator.geolocation)
    return alert("Goelocation is not supported by your browser.");

  navigator.geolocation.getCurrentPosition((postion) =>
    socket.emit(
      "sendLocation",
      {
        lat: postion.coords.latitude,
        long: postion.coords.longitude,
      },
      () => console.log("Location shared!")
    )
  );
});
