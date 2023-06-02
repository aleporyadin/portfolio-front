import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import AddIcon from "@mui/icons-material/Add";
import ProjectsBar from "../../components/ProjectsBar";
import ProjectService from "../../api/projectsService";
import AuthContext from "../../context/AuthContext";

export const Projects = () => {
    const {currentUser} = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
      console.log(currentUser);

      if (!currentUser.id) { return; }
      ProjectService.getFiles(currentUser.id)
        .then((response) => {

          setFileList(response.data);
        }).catch((error) => {
        console.error(error);
        // Handle error
      });
    }, [currentUser]);
    console.log(fileList);
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
      const formData = new FormData();
      formData.append("file", selectedFile);
      ProjectService.uploadFile(currentUser.id, formData);
    };

    const handleDownload = (filename) => {
      ProjectService.downloadFile(currentUser.id, 1);

    };

    const handleDelete = (filename) => {
      ProjectService.deleteFile(currentUser.id, 1);

    };
    const handlers = {
      handleDelete, handleDownload, handleUpload, handleFileChange, setSelectedFile, selectedFile
    };

    return (<>
        <div className="projects-items-container">
          <h1 className="dashboard-item-header font-semibold text-xl4 ">
            Projects List:
          </h1>
          <ProjectsBar projectsList={fileList} handlers={handlers}/>
        </div>
        <div className="projects-actions ">
          <h1 className="dashboard-item-header font-semibold text-xl4 ">
            Action for projects
          </h1>
          <div className="grid grid-rows-1 grid-cols-4 gap-3 ">
            <div className="flex flex-col items-center	">
              <div className="add-btn flex flex-col justify-center items-center hover:border-b-gray-70">
                <AddIcon/>
              </div>
              <span>Upload Project </span>
            </div>
            <div className=" flex flex-col items-center	">
              <div className="add-btn flex flex-col justify-center items-center">
                <AddIcon/>
              </div>
              <span>Download project</span>
            </div>
            <div className=" flex flex-col items-center	">
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
  }
;
