// #searchArea
// #searchBtn
// #location
// #locationCity
// #locationCountry
// #temp
// #weatherDescription
// #mintemp
// #maxtemp
// windSpeed
// humidity
// today

// weather API ID
//7c48a89144318f7fadb3ff521900fa26
// using ciy name
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
import { getweatherData } from './weather.js'
const searchedCity = document.getElementById("searchArea").value;


const searchBtn = document.getElementById("searchBtn"); //!
const temp = document.getElementById("temp"); //!

const locationCity = document.getElementById("locationCity");
const locationCountry = document.getElementById("locationCountry");
const weatherDescription = document.getElementById("weatherDescription");
const mintemp = document.getElementById("mintemp");
const maxtemp = document.getElementById("maxtemp");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const today = document.getElementById("today");
const weatherIcon = document.getElementById("weatherIcon");
const weatherBox = document.getElementById("weatherBox");

searchBtn.addEventListener("click", () => {
  const searchedCity = document.getElementById("searchArea").value;

  if (searchedCity) {
    getweatherData(searchedCity);;
  } else {
    weatherBox.innerHTML = `<div>search for your city</div>`;
  }
});

