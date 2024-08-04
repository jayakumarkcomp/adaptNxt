async function getWeatherData(city) {
    const apiKey = "ba00f8d8638d6b8643a8642791767c8a";
    const weatherURL = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    try {
      const response = await fetch(weatherURL);
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.log("Error fetching weather data:", error);
      throw error;
    }
  }
  
  module.exports = { getWeatherData };