const url = "https://api.openweathermap.org/data/2.5/";
let key;

const search = document.getElementById("searchbar");
const content = document.querySelector(".content");


const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(search.value);
  }
};

const getResult = async (cityName) => {
  let query = await (
    await fetch(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`)
  ).json();
  displayResult(query);
};

const displayResult = (result) => {
  const display = `
  <div id="city" class="city">${result.name} , ${result.sys.country}</div>
  <div id="temp" class="temp">${Math.floor(result.main.temp)}°C </div>
  <div id="desc" class="desc">${result.weather[0].description}</div>
  <div id="minmax" class="minmax"> ${Math.floor(result.main.temp_min)} °C /  ${Math.floor(result.main.temp_max)}°C </div>
  `;
  content.innerHTML = display;
};

search.addEventListener("keypress", setQuery);
