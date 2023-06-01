import React, { useEffect } from "react";
import "./index.css";
import { NewsBar } from "../../components/NewsBar";
import WeatherBar from "../../components/WeatherBar";
import JobsBar from "../../components/JobsBar";

export const Home = () => {

  return (
    <div className="dashboard-layout">
      <div className="dashboard-container-left-side ">
        <h1 className="dashboard-item-header font-semibold text-xl4 ">
          Top News
        </h1>
        <NewsBar/>
      </div>
      <div className="dashboard-weather-container">
        <h1 className="dashboard-item-header font-semibold text-xl4 ">
          Weather for
        </h1>
        <WeatherBar/>
      </div>
      <div className="dashboard-jobs-container">
        <h1 className="dashboard-item-header font-semibold text-xl4 ">
          List of Jobs
        </h1>
        <JobsBar/>
      </div>
    </div>
  );
};
