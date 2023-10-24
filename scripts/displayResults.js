import { dateBuilder } from "./dataBuilder.js";

export const displayResults = (weatherObj) => {
  const cityName = document.querySelector(".main__city");
  const date = document.querySelector(".main__date");
  const temp = document.querySelector(".main__temp");
  const weather = document.querySelector(".main__weather");
  const minMax = document.querySelector(".main__min-max");
  const wind = document.querySelector(".main__wind");
  const windIcon = document.querySelector(".main__wind-icon");
  const errorMesTemplate = document.querySelector(".main__error-mes-temp");
  const errorMesEl = document.importNode(errorMesTemplate.content, true);
  const searchBlock = document.querySelector(".main__search");

  if (+weatherObj.cod >= 400) {
    searchBlock.prepend(errorMesEl);
    const elem = document.querySelector(".main__error-mes");
    setTimeout(() => {
      elem.remove();
    }, 1000);
    return;
  }

  cityName.textContent = weatherObj.name;
  const now = new Date();
  date.textContent = dateBuilder(now);
  temp.textContent = weatherObj.main.temp + "°c";
  weather.textContent = weatherObj.weather[0].main;
  minMax.textContent = `${Math.round(
    weatherObj.main.temp_min
  )}°c - ${Math.round(weatherObj.main.temp_max)}°c`;
  windIcon.style.transform = `rotate(${weatherObj.wind.deg}deg)`;
  wind.textContent = weatherObj.wind.speed + " m/s";
};
