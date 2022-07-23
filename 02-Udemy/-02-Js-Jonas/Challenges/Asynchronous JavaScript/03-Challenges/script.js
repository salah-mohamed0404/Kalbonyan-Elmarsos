"use strict";

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

const imgContainer = document.querySelector(".images");

const loadNPause = async function () {
  try {
    // load first img
    let img = await createImage("img/img-1.jpg");
    console.log("image 1 has loaded");
    await wait(2);
    img.style.display = "none";

    // load second
    img = await createImage("img/img-2.jpg");
    await wait(2);
    img.style.display = "none";
  } catch {
    console.error(err);
  }
};
loadNPause();
