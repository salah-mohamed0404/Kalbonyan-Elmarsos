"use strict";

///////////////////////////////////////

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");
let img;

const createImage = imgPath =>
  new Promise(function (resolve, reject) {
    img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", () => reject(new Error("can't load img")));
  });

createImage("img/img-1.jpg")
  .then(() => wait(2))
  .then(() => {
    img.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then(() => wait(2))
  .then(() => (img.style.display = "none"))
  .catch(err => console.error(err));
