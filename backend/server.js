import express from "express";
import fs from "fs";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

async function fetchWeatherOnce() {
  const api = process.env.TOMORROW_KEY;
  const area = process.env.LOCATION;
  const options = {
    method: 'GET',
    url: `https://api.tomorrow.io/v4/weather/realtime?location=${area}&apikey=${api}`,
    headers: { accept: 'application/json', 'accept-encoding': 'deflate, gzip, br' }
  };

  try {
    const response = await axios.request(options);
    const weather = response.data.data;
    console.log(weather);

    fs.writeFileSync('C:/Users/Sharon/Desktop/weatherapp/frontend/public/weather.json', JSON.stringify(weather, null, 2));
    console.log("Weather data saved to weather.json");
  } catch (error) {
    console.error(" Error fetching weather:", error.message);
  }
}

// Call it once on server start
fetchWeatherOnce();

// Optional: serve frontend static files
app.use(express.static("./frontend/public"));

// Example API route (if you want it)
app.get("/api/weather", (req, res) => {
  const data = fs.readFileSync("C:/Users/Sharon/Desktop/weatherapp/frontend/public/weather.json");
  res.json(JSON.parse(data));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
