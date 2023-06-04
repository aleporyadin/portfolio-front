import React, {useContext, useEffect, useState} from "react";
import "./index.css";
import AddIcon from "@mui/icons-material/Add";
import ProjectsBar from "../../components/ProjectsBar";
import ProjectService from "../../api/projectsService";
import AuthContext from "../../context/AuthContext";
import {Button, Fab, Input} from "@mui/material";

const style = {
  backgroundColor: "rgba(112, 181, 255, 0.84)",
  borderRadius: "20px",
  height: "70px",
  width: "70px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  transition: "all .2s ease-in-out",
  hover: {
    backgroundColor: "yellow"
  }
};

export const Projects = () => {
    const {currentUser} = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
      console.log(currentUser);

      if (!currentUser.id) {
        return;
      }
      ProjectService.getFiles(currentUser.id)
        .then((response) => {

          setFileList(response.data);
        }).catch((error) => {
        console.error(error);
        // Handle error
      });
    }, [currentUser]);
    console.log(fileList);
    const handleUpload = (e) => {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      ProjectService.uploadFile(currentUser.id, formData);
    };

    const handleDownload = (filename) => {
      ProjectService.downloadFile(currentUser.id, selectedFile.id);
    };

    const handleDelete = (filename) => {
      ProjectService.deleteFile(currentUser.id, 1);
    };

    const handleRename = (filename) => {
      ProjectService.renameFile(currentUser.id, 1);
    };

    const handlers = {
      handleDelete, handleDownload, handleUpload, setSelectedFile, selectedFile
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

          <div className="grid grid-rows-1 grid-cols-4 gap-3 mt-2 h-full w-full items-center ">
            <div className="flex flex-col items-center	">
              <label htmlFor="upload-photo" className="flex flex-col items-center mb-1">
                <input style={{display: "none"}} id="upload-photo" name="file" type="file"
                       onChange={(e) => handleUpload(e)}/>
                <div className="add-btn">
                  <AddIcon/>
                </div>
              </label>
              <span>Upload</span>
            </div>
            <div className=" flex flex-col items-center	">
              <div className="add-btn">
                <AddIcon onClick={handleDownload}/>
              </div>
              <span>Download</span>
            </div>
            <div className=" flex flex-col items-center	">
              <div className="add-btn">
                <AddIcon onClick={() => handleDelete(selectedFile)}/>
              </div>
              <span>Delete</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="add-btn">
                <AddIcon onClick={handleRename}/>
              </div>
              <span>Rename</span>
            </div>
          </div>
        </div>
        <div className="projects-info">

        </div>
      </>
    );
  }
;
