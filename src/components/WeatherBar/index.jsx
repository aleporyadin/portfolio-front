import React, {useEffect} from "react";
import "./index.css";
import WeatherService from "../../api/weatherService";

export const WeatherBar = () => {


  useEffect(() => {
   WeatherService.getWeather()
  }, []);

  return (
    <div className="weather-container">
    </div>
  )
}
