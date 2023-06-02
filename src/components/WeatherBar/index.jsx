import React, {useEffect, useState} from "react";
import WeatherService from "../../api/weatherService";
import "./index.css";

const WeatherBar = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastDays, setForecastDays] = useState(null);
  const fetchWeatherData = async () => {
    try {
      const res = await WeatherService.getWeather();
      setWeatherData(res);
      setForecastDays(res.forecast.forecastday.slice(1, 5));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="weather-container">
      {weatherData &&
        <div className="flex">
          <div className="grid grid-rows-3 grid-cols-2 float-left">
            <img src={weatherData.current.condition.icon} className="current-icon pull-left"
                 alt={weatherData.current.condition.text}></img>
            <h3 className="font-semibold text-xl4">Lviv</h3>
            <div className="temp-current pull-left col-span-full text-center">
              {weatherData.current.temp_c}&deg;C
            </div>
          </div>
          <div>
            <div>Pressure: <span className="ow-pressure">{weatherData.current.pressure_in} inHg</span></div>
            <div>Humidity: <span className="ow-humidity">{weatherData.current.humidity} %</span></div>
            <div>Wind: <span className="ow-wind">{(weatherData.current.wind_kph * 0.277778).toFixed(2)} m/s</span></div>
          </div>
          <div className="flex ">
            {forecastDays.map((day) => (
              <div key={day.date} className="text-center mx-3">
                <div className="font-semibold text-xl">
                  {daysOfWeek[new Date(day.date).getDay()]}
                </div>
                <div className="flex justify-center">
                  <img className="sub-icon pull-left" src={day.day.condition.icon}
                       alt={day.day.condition.text}/>
                </div>
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
