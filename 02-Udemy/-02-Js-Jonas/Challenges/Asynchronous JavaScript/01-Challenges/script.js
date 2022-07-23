"use strict";
const search = document.querySelector(".country-btn");
const countryInput = document.querySelector(".country-input");
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// https://restcountries.com/v2/
///////////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`country not found (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1

  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found!");

      // country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        "Country not found"
      );
    })

    .then(data => renderCountry(data, "neighbour"))
    .catch(err => {
      console.error(`${err}💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// getCountryData("portugal");

///////////////////////////////////////
search.addEventListener("click", function (e) {
  e.preventDefault();
  getCountryData(countryInput.value);
});

///////////////////////////////////////
// Coding challenge 1

const whereAmI = function (lat, lng) {
  return fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=JSON&auth=481833391063961196096x15876`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);

      return response.json();
    })
    .then(data => {
      console.log(`you are in ${data.city}, ${data.country}`);
      getCountryData(data.country);
    })
    .catch(err => {
      console.error(`${err}💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    });
};

// whereAmI(52.508, 13.381);
// whereAmI(-33.933, 18.474);
