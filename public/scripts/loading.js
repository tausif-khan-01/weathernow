const loadingSpinner = document.getElementById("loading");
const weatherBox = document.getElementById("weatherBox");

export function showLoading() {
  if (loadingSpinner.classList.contains("hidden")) {
    loadingSpinner.classList.remove("hidden");
    loadingSpinner.classList.add("flex");
  }
}

export function hideLoading() {
  if (loadingSpinner.classList.contains("flex")) {
    loadingSpinner.classList.add("hidden");
    loadingSpinner.classList.remove("flex");
  }
}

export function showWeatherBox() {
  weatherBox.classList.remove("hidden");
  weatherBox.classList.add("flex");
  
}
export function hideWeatherBox() {
  weatherBox.classList.remove("flex");
  weatherBox.classList.add("hidden");
  
}
