import axios from 'axios';
import 'dotenv/config'
import fs from 'fs';


const api = process.env.TOMORROW_KEY;
const area = process.env.LOCATION;
const options = {
  method: 'GET',
  url: `https://api.tomorrow.io/v4/weather/realtime?location=${area}&apikey=${api}`,
  headers: {accept: 'application/json', 'accept-encoding': 'deflate, gzip, br'}
};


async function fetchWeather(){
  try{
    const response = await axios.request(options);
    const weather = response.data.data;
    console.log(weather.values);

    fs.writeFileSync('../frontend/public/weather.json', JSON.stringify(weather, null, 2));

  }
  catch(error){
    console.log("Error fetching the data:", error.message);

  }
}

fetchWeather()

import { useEffect, useState } from "react";
import axios from "axios";
import 'dotenv/config'
import { getWeatherVideo } from "../utils/getWeatherVideo";

export function useWeatherData() {
  const [weather, setWeather] = useState(null);
  const [bgVideo, setBgVideo] = useState("/images/default.mp4");
  const [currentWeather, setCurrentWeather] = useState("Loading...");

  useEffect(() => {
    axios.get("/api/weather")
      .then((res) => {
        const data = res.data;
        setWeather(data);

        const { video, description } = getWeatherVideo(data);
        setBgVideo(video);
        setCurrentWeather(description);
      })
      .catch((err) => {
        console.error("Failed to load weather:", err);
        setCurrentWeather("❌ Unable to fetch weather data");
      });
  }, []);

  return { weather, bgVideo, currentWeather };
}
