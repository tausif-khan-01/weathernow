import { getUserLocation } from "./script.js";
import { hideWeatherBox, showLoading } from "./loading.js";

const userLocationData = async (latitude, longitude) => {
  try {
    hideWeatherBox()
    showLoading()
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=7c48a89144318f7fadb3ff521900fa26`);
    const userLocationData = await response.json();
    const cityName = userLocationData[0].name;
    return cityName;
  } catch (error) {
    // Handle the error here or re-throw it to be handled in the outer catch block
    throw error;
  }
};

export async function getLocationAndCity() {
  try {
    
    const location = await getUserLocation();
    const { latitude, longitude } = location;
   
    const nameOfCity = await userLocationData(latitude, longitude);

    return nameOfCity; // You can return it from the function if needed
  } catch (error) {
    console.error("Error:", error);
    // Handle the error, such as displaying a message to the user or falling back to a default location.
  }
}

