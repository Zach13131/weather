const API_KEY = "c99fe6c5051d10a32b31f90911ecc9ad";
const URL = " https://api.openweathermap.org/data/2.5/weather?units=metric&&";
const LACATION = "Tashkent";

import { selectTheme } from "./SelectTheme.js";
import { dateBuilder } from "./dataBuilder.js";
import { displayResults } from "./displayResults.js";

selectTheme();

const checkWeather = async (cityName) => {
  try {
    const city = `&&q=${cityName}`;
    const url = URL + city + "&appid=" + API_KEY;
    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (error) {}
};

const getAndDisplayWeather = async (cityName) => {
  const weatherObj = await checkWeather(cityName);

  displayResults(weatherObj);
};

getAndDisplayWeather(LACATION);

const input = document.querySelector(".main__input");
input.addEventListener("keypress", async (e) => {
  if (e.key !== "Enter") return;
  getAndDisplayWeather(e.target.value);
  input.value = "";
});
