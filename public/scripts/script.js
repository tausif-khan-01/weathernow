import { getLocationAndCity } from "./geolocation.js";
import { getweatherData } from "./weather.js";

const searchedCity = document.getElementById("searchArea").value;
const searchBtn = document.getElementById("searchBtn"); //!
const temp = document.getElementById("temp"); //!
const locationArea = document.getElementById("locationArea");
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

export async function getUserLocation() {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },

        () => {
          searchCityManually();
          reject(
            (humidity.innerHTML = `location does not allowed Search for your city`)
          );
        }
      );
    });
  } else {
    return Promise.reject("Geolocation is not supported by this browser.");
  }
}

const idarHAi = await getUserLocation();
const mHAi = idarHAi.longitude;

if (mHAi) {
  const searchedCity = await getLocationAndCity();
  getweatherData(searchedCity);
}

function searchCityManually() {
  searchBtn.addEventListener("click", () => {
    const searchedCity = document.getElementById("searchArea").value;
    if (searchedCity) {
      getweatherData(searchedCity);
    }else{
      humidity.innerHTML = `Try seaching for your city`
    }
  });
}
