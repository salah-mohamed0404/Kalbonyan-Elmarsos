const socket = io();

// Elements
const $messageForm = document.getElementById("message-form");
const $messageFormInput = $messageForm.querySelector("input");
const $messageFormBtn = $messageForm.querySelector("button");
const $locationBtn = document.getElementById("send-location");
const $messages = document.getElementById("messages");
const $sidebar = document.getElementById("sidebar");

// Templetes
const messageTemplete = document.getElementById("message-template").innerHTML;
const locationTemplete = document.getElementById("location-template").innerHTML;
const sidebarTemplete = document.getElementById("sidebar-template").innerHTML;

// Options
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

socket.on("message", (message) => {
  const html = Mustache.render(messageTemplete, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  $messages.insertAdjacentHTML("beforeend", html);
});

socket.on("sendLocation", (location) => {
  const html = Mustache.render(locationTemplete, {
    username: location.username,
    location: location.text,
    createdAt: moment(location.createdAt).format("h:mm a"),
  });
  $messages.insertAdjacentHTML("beforeend", html);
});

socket.on("roomData", ({ room, users }) => {
  const html = Mustache.render(sidebarTemplete, {
    room,
    users,
  });
  $sidebar.innerHTML = html;
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

socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});
