const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));

const weather = require("./utils/weather");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  try {
    const weatherData = await weather.getWeatherData(city);
    res.render("index", { weather: weatherData });
  } catch (error) {
    res.status(500).send("Error fetching weather data.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Weather app is running on port ${PORT}`);
});