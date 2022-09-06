const socket = io();

// Elements
const $messageForm = document.getElementById("message-form");
const $messageFormInput = $messageForm.querySelector("input");
const $messageFormBtn = $messageForm.querySelector("button");
const $locationBtn = document.getElementById("send-location");

socket.on("message", (message) => console.log(message));

$messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  $messageFormBtn.setAttribute("disabled", "disabled");

  const message = e.target.elements.message.value;

  socket.emit("sendMessage", message, (error) => {
    $messageFormBtn.removeAttribute("disabled");
    $messageFormInput.value = "";
    $messageFormInput.focus();
    error ? console.log(error) : console.log("message was delivered!");
  });
});

$locationBtn.addEventListener("click", () => {
  if (!navigator.geolocation)
    return alert("Goelocation is not supported by your browser.");

  $locationBtn.setAttribute("disabled", "disabled");

  navigator.geolocation.getCurrentPosition((postion) => {
    $locationBtn.removeAttribute("disabled");
    socket.emit(
      "sendLocation",
      {
        lat: postion.coords.latitude,
        long: postion.coords.longitude,
      },
      () => console.log("Location shared!")
    );
  });
});
