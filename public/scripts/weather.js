import {
  hideLoading,
  hideWeatherBox,
  showLoading,
  showWeatherBox,
} from "./loading.js";

const today = document.getElementById("today");

const temp = document.getElementById("temp");
const weatherDescription = document.getElementById("weatherDescription");
const mintemp = document.getElementById("mintemp");
const maxtemp = document.getElementById("maxtemp");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weatherIcon");

export const getweatherData = async (city) => {
  try {
    hideWeatherBox();
    showLoading();
    const response = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7c48a89144318f7fadb3ff521900fa26`
    );
    const weatherDetails = await response.json();
    hideLoading();
    showWeatherBox();
    showWeather(weatherDetails);
  } catch (error) {
    if (error) {
      temp.innerHTML = ``;
      weatherDescription.innerText = ``;
      mintemp.innerHTML = ``;
      maxtemp.innerHTML = ``;
      humidity.innerHTML = `NOT FOUND. Check for spelling Mistakes`;
      windSpeed.innerText = ``;
      locationArea.innerHTML = ``;
      weatherIcon.innerHTML = ``;
    }
  }
};

function getToday() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  return daysOfWeek[today];
}

function showWeather(weatherData) {
  temp.innerHTML = `<span >${weatherData.main.temp}</span><span class="text-6xl"><sup>o</sup>C</span>`;
  weatherDescription.innerText = weatherData.weather[0].description;
  humidity.innerHTML = `<div class=""><img src="/assets/drop-humidity-icon.svg" alt="" class="w-6 m-auto" /></div><div class="grow font-mono">${weatherData.main.humidity}%</div>`;
  mintemp.innerHTML = `MIN : ${weatherData.main.temp_min}<sup>o</sup>C`;
  maxtemp.innerHTML = `MAX : ${weatherData.main.temp_max}<sup>o</sup>C`;
  windSpeed.innerHTML = `<div ><img src="/assets/windsock-100.png" alt="" class="w-6 m-auto" /></div><div class="grow font-mono"><span id="">${weatherData.wind.speed}</span>km/hr</div>`;
  locationArea.innerHTML = `<i class="fa-solid fa-location-dot text-yellow-400 text-lg"></i><span class="tracking-wide" >${weatherData.name}, ${weatherData.sys.country}</span>`;

  weatherIcon.innerHTML = `<img src="/assets/weather/${weatherData.weather[0].icon}.svg" alt=""  class="m-auto" />`;
  today.innerHTML = `${getToday()}`;
}
