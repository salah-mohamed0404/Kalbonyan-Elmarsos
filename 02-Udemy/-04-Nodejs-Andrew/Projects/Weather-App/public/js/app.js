console.log("Client side JS file is louded!");

const form = document.querySelector("form");
const search = document.querySelector("input");
const messageParagraph = document.querySelector("#response");

const setMessage = function (messageField, resMessage) {
  messageField.textContent = "";
  messageField.textContent = resMessage;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const location = search.value;

  setMessage(messageParagraph, "Loudind...");
  fetch(`/weather?address=${location}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) return setMessage(messageParagraph, data.error);

      setMessage(messageParagraph, `${data.location}: ${data.forecast}`);
    });
});
