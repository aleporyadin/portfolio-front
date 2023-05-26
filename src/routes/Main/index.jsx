import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import "./index.scss";

export const Main = () => {
  return (
    <div className="home-screen">
      <div className="layout-home">
        <Navbar />
        <div className="content-container gap-4 flex flex-col w-full">
          <Banner name="Dashboard" />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {};
