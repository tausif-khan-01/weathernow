export const getweatherData = (city) => {
  
  fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7c48a89144318f7fadb3ff521900fa26`)
    .then((response) => response.json())
    .then((weatherData) => {
      console.log(weatherData);
      temp.innerText = weatherData.main.temp;
      weatherDescription.innerText = weatherData.weather[0].description;
      humidity.innerText = weatherData.main.humidity;
      mintemp.innerText = weatherData.main.temp_min;
      maxtemp.innerText = weatherData.main.temp_max;
      windSpeed.innerText = weatherData.wind.speed;
      locationCountry.innerHTML = weatherData.sys.country;
      locationCity.innerHTML = weatherData.name;
      const getweathercode = weatherData.weather[0].icon;
      weatherIcon.src = `/assets/weather/${getweathercode}.svg`;
    })
    .catch((error) => {
      if (error) {
        weatherBox.innerHTML = ``;
      }
    });
};


