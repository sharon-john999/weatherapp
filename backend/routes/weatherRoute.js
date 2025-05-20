import express from "express";
import fs from "fs";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();


// Fetch weather and write to file
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

    const filePath = 'c:/Users/Sharon/Desktop/weatherapp/frontend/public/weather.json';
    fs.writeFileSync(filePath, JSON.stringify(weather, null, 2));
    console.log("Weather data saved to weather.json");
  } catch (error) {
    console.error("Error fetching weather:", error.message);
  }
}

// Call the function once when this module is imported

export default fetchWeatherOnce;
