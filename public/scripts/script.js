import { getLocationAndCity } from "./geolocation.js";
import { hideLoading, showWeatherBox } from "./loading.js";
import { getweatherData } from "./weather.js";

const searchBtn = document.getElementById("searchBtn");
const humidity = document.getElementById("humidity");



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
            (hideLoading(),
            showWeatherBox(),
            (humidity.innerHTML = `location does not allowed Search for your city`))
          );
        }
      );
    });
  } else {
    return Promise.reject("Geolocation is not supported by this browser.");
  }
}

const userCoordidates = await getUserLocation();
const userlongitude = userCoordidates.longitude;

if (userlongitude) {
  const searchedCity = await getLocationAndCity();
  getweatherData(searchedCity);
}

function searchCityManually() {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchedCity = document.getElementById("searchArea").value;
    if (searchedCity) {
      getweatherData(searchedCity);
    } else {
      humidity.innerHTML = `Try seaching for your city`;
    }
  });
}

searchCityManually();

