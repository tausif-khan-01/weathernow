export const getweatherData = (city) => {
  fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7c48a89144318f7fadb3ff521900fa26`)
    .then((response) => response.json())
    .then((weatherData) => {
      const getToday = () => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date().getDay();
        return daysOfWeek[today];
      };
     
      temp.innerHTML = `<span >${weatherData.main.temp}</span><span class="text-6xl"><sup>o</sup>C</span>`;
      weatherDescription.innerText = weatherData.weather[0].description;
     
      humidity.innerHTML = `<div class=""><img src="/assets/drop-humidity-icon.svg" alt="" class="w-6 m-auto" /></div><div class="grow font-mono">${weatherData.main.humidity}%</div>`;

      mintemp.innerHTML = `MIN : ${weatherData.main.temp_min}<sup>o</sup>C`;
      maxtemp.innerHTML = `MAX : ${weatherData.main.temp_max}<sup>o</sup>C`;

      windSpeed.innerHTML = `<div ><img src="/assets/windsock-100.png" alt="" class="w-6 m-auto" /></div><div class="grow font-mono"><span id="">${weatherData.wind.speed}</span>km/hr</div>`;
      locationArea.innerHTML = `<i class="fa-solid fa-location-dot text-yellow-400 text-lg"></i><span class="tracking-wide" >${weatherData.name}, ${weatherData.sys.country}</span>`;
      const Day = getToday();
      console.log(Day);

      weatherIcon.innerHTML = `<img src="/assets/weather/${weatherData.weather[0].icon}.svg" alt=""  class="m-auto" />`;
      today.innerHTML = `${Day}`;
    })
    .catch((error) => {
      if (error) {
        temp.innerHTML = ``;
        weatherDescription.innerText = ``;
   
        humidity.innerHTML = `NOT FOUND. Check for spelling Mistakes`;

        mintemp.innerHTML = ``;
        maxtemp.innerHTML = ``;

        windSpeed.innerText = ``;
        
        locationArea.innerHTML = ``;

        weatherIcon.innerHTML = ``;
      }
    });
};
