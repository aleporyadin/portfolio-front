import React from "react";
import "./index.css";
import {ProjectsBar} from "../../components/ProjectsBar";
import AddIcon from '@mui/icons-material/Add';

export const Projects = () => {

  return (<>
      <div className="projects-items-container">
        <h1 className="dashboard-item-header font-semibold text-xl4 ">
          Projects List:
        </h1>
        <ProjectsBar/>
      </div>
      <div className="projects-actions ">
        <h1 className="dashboard-item-header font-semibold text-xl4 ">
          Action for projects
        </h1>
        <div className="flex justify-around ">
          <div className=" flex flex-col items-center ">
            <div className="add-btn flex flex-col justify-center items-center  ">
              <AddIcon/>
            </div>
            <span>Upload Project </span>
          </div>
          <div className=" flex flex-col items-center">
            <div className="add-btn flex flex-col justify-center items-center">
              <AddIcon/>
            </div>
            <span>Download project</span>
          </div>
          <div className=" flex flex-col items-center">
            <div className="add-btn flex flex-col justify-center items-center">
              <AddIcon/>
            </div>
            <span>Delete Selected Project</span>
          </div>
          <div className=" flex flex-col items-center">
            <div className="add-btn flex flex-col justify-center items-center">
              <AddIcon/>
            </div>
            <span> Rename Selected Project</span>
          </div>

        </div>

      </div>
      <div className="projects-info">

      </div>
    </>
  );
};
