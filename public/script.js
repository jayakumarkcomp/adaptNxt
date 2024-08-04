const apiKey = "ba00f8d8638d6b8643a8642791767c8a";
const searchForm = document.getElementById("search-form");
const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const weatherDescription = document.getElementById("weather-description");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const main = document.getElementById("main");
const description = document.getElementById("description");
const clouds = document.getElementById("clouds");
const visibility = document.getElementById("visibility");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
  }
});

function getWeatherData(city) {
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
  axios.get(url)
    .then((response) => {
      const data = response.data;
      cityName.textContent = data.location.name;
      weatherDescription.textContent = data.current.weather_descriptions[0];
      weatherIcon.src = data.current.weather_icons[0];
      temperature.textContent = `${data.current.temperature}°C`;
      main.textContent = data.current.weather_descriptions[0];
      description.textContent = data.current.weather_descriptions[0];
      clouds.textContent = `${data.current.cloudcover}%`;
      visibility.textContent = `${data.current.visibility} meters`;
      humidity.textContent = `${data.current.humidity}%`;
      pressure.textContent = `${data.current.pressure} hPa`;
    })
    .catch((error) => {
      console.error(error);
    });
}