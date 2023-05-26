import React from "react";
import "./index.scss";
import { NewsList } from "../../components/NewsList";

export const Home = () => {
  console.log("asd");
  return (
    <div className="dashboard-layout">
      <div className="dashboard-container-left-side ">
        <h1 className="dashboard-item-header font-semibold text-xl4 ">
          Top News
        </h1>
        <NewsList />
      </div>
      <div className="dashboard-container-other-cells">
        asdxz
      </div>
    </div>
  );
};
