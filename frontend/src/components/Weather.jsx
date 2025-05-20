import { useWeatherData } from "../hooks/useWeatherData";

function Weather() {
  const { bgVideo} = useWeatherData();

  return (
    <div className="background-video">
      <video autoPlay muted loop key={bgVideo}>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Weather;
