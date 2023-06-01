import React, { useEffect, useState } from "react";
import WeatherService from "../../api/weatherService";
import "./index.css";

const WeatherBar = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastDays, setForecastDays] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const res = await WeatherService.getWeather();
        setWeatherData(res);
        setForecastDays(res.forecast.forecastday.slice(1, 5));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="weather-container">
      {weatherData &&
        <div className="flex flex-col">
          <div className="ow-row">
            <div className="grid grid-rows-1 grid-cols-1 float-left">
              <h3 className="font-semibold text-xl4 text-center">Lviv</h3>
              <img src={weatherData.current.condition.icon} className=" ow-ico-current pull-left"
                   alt={weatherData.current.condition.text}></img>
            </div>
            <div className="temp-current pull-left">{weatherData.current.temp_c}&deg;C</div>
            <div className="ow-current-desc pull-left">
              <div>Pressure: <span className="ow-pressure">{weatherData.current.pressure_in} inHg</span></div>
              <div>Humidity: <span className="ow-humidity">{weatherData.current.humidity} %</span></div>
              <div>Wind: <span className="ow-wind">{(weatherData.current.wind_kph * 0.277778).toFixed(2)} m/s</span></div>
            </div>
          </div>
          <div className="flex ">

            {forecastDays.map((day) => (
              <div key={day.date} className="ow-forecast-item">
                <div className="font-semibold text-xl">
                  {daysOfWeek[new Date(day.date).getDay()]}
                </div>
                <div className="flex justify-center"><img src={day.day.condition.icon}
                                                                alt={day.day.condition.text}/></div>
                <div className="ow-forecast-temp">
                  <span className="max">{day.day.mintemp_c}&deg;C</span>
                  <span className="min">{day.day.maxtemp_c}&deg;C</span>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      }
    </div>
  );
};

export default WeatherBar;
