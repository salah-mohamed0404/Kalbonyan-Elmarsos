const socket = io();

// Elements
const $messageForm = document.getElementById("message-form");
const $messageFormInput = $messageForm.querySelector("input");
const $messageFormBtn = $messageForm.querySelector("button");
const $locationBtn = document.getElementById("send-location");
const $messages = document.getElementById("messages");
const $locationMessages = document.getElementById("location-messages");

// Templetes
const messageTemplete = document.getElementById("message-template").innerHTML;
const locationTemplete = document.getElementById("location-template").innerHTML;

socket.on("message", (message) => {
  console.log(message);
  const html = Mustache.render(messageTemplete, {
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  $messages.insertAdjacentHTML("beforeend", html);
});

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

socket.on("sendLocation", (location) => {
  const html = Mustache.render(locationTemplete, {
    location,
  });
  $locationMessages.insertAdjacentHTML("beforeend", html);
});
