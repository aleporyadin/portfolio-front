import React, { useEffect } from "react";
import "./index.css";
import { NewsList } from "../../components/NewsList";
import JobsService from "../../api/jobsService";
import WeatherService from "../../api/weatherService";
import {WeatherBar} from "../../components/WeatherBar";

export const Home = () => {
  // JobsService.getJobs()
  // const s = async () => {
  //   console.log(await WeatherService.getWeather())
  //
  // }
  // useEffect(() => {
  //  s()
  // }, []);

  return (
    <div className="dashboard-layout">
      <div className="dashboard-container-left-side ">
        <h1 className="dashboard-item-header font-semibold text-xl4 ">
          Top News
        </h1>
        <NewsList />
      </div>
      <div className="dashboard-container-other-cells">
        <div className="dashboard-weather-container">
          <WeatherBar/>
        </div>
        <div className="dashboard-weather-container">

        </div>
      </div>
    </div>
  );
};
