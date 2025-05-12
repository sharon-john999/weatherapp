import { useEffect, useState } from "react";

export function useWeatherData() {
  const [weather, setWeather] = useState("");
  const [bgVideo, setBgVideo] = useState("/images/cloudy.mp4");
  const [currentWeather, setCurrentWeather] = useState("Loading...");

  useEffect(() => {
    fetch("/weather.json")
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        console.log("Fetched weather data:", data);
        const { weatherCode} = data.values;

        let video;
        let description;

        if ([4200, 4001, 1101].includes(weatherCode)) {
          video = "/images/rain.mp4";
          description = "Light Rain";
        } else if ([1001, 1102].includes(weatherCode)) {
          video = "/images/cloudy.mp4";
          description = "Cloudy";
        } else if ([2100, 2000].includes(weatherCode)) {
          video = "/images/fog.mp4";
          description = "Foggy";
        } else if (weatherCode === 4201) {
          video = "/images/heavyrain.mp4";
          description = "Heavy Rain";
        } else if (weatherCode === 8000) {
          video = "/images/thunderstorm.mp4";
          description = "Thunderstorm";
        }
        else if ([1000,1100].includes(weatherCode)) {
          video = "/images/sunny.mp4";
          description = "Sunny";
        }
        else {
          video = "/images/windy.mp4";
          description = "Windy";
        }

        setBgVideo(video);
        setCurrentWeather(description);
        setWeather(data);
      })
      .catch((err) => {
        console.error("Failed to load weather:", err);
        setCurrentWeather("Unable to fetch weather data");
      });
  }, []);

  return { weather, bgVideo, currentWeather };
}
