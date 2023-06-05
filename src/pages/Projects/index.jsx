import React, {useContext, useEffect, useState} from "react";
import "./index.css";
import AddIcon from "@mui/icons-material/Add";
import ProjectsBar from "../../components/ProjectsBar";
import ProjectService from "../../api/projectsService";
import AuthContext from "../../context/AuthContext";
import {Button, Fab, Input} from "@mui/material";
import {CANNOT_LOADING_PROJECTS} from "../../constants/messages";
import NewsService from "../../api/newsService";
import {toast} from "react-toastify";
import ProjectDiag from "../../components/ProjectDiag";

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
    const [data, setData] = useState({
      files: [],
      loading: true,
      page: 0,
      size: 10
    });
    const getProjects = async () => {
      try {
        if (currentUser.id) {
          setData({...data, loading: true});
          const response = await ProjectService.getFiles({
            userId: currentUser.id,
            page: data.page,
            size: data.size
          });
          const content = response.data.content;
          if (content.length) {
            setData({
              ...data,
              files: [...data.files, ...content],
              loading: false,
              last: content.last,
              page: data.page + 1
            });
          } else {
            setData({...data, loading: false});
          }
        }
      } catch (error) {
        console.error(error);
        setData({...data, error: CANNOT_LOADING_PROJECTS, loading: false});
      }
    };

    useEffect(() => {
      getProjects();
    }, [currentUser]);

    const handleUpload = async (e) => {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const response = await ProjectService.uploadFile(currentUser.id, formData);
      checkResponse(response);
      setTimeout(() => getProjects(), 3000);
    };

    const handleDownload = async () => {
      if (isFileSelected()) {
        const response = await ProjectService.downloadFile(currentUser.id, selectedFile.id);
        checkResponse(response);
      }
    };

    const handleDelete = async () => {
      if (isFileSelected()) {
        const response = await ProjectService.deleteFile(currentUser.id, selectedFile.id);
        checkResponse(response);
        window.location.reload();
      }
    };

    const handleRename = async () => {
      if (isFileSelected()) {
        const response = await ProjectService.renameFile(currentUser.id, selectedFile.id);
        checkResponse(response);
        window.location.reload();
      }
    };

    const isFileSelected = () => {
      if (!selectedFile) {
        toast.warning("Choose file, and try again..");
        return false;
      }
      return true;
    };

    const checkResponse = (response) => {
      console.log(response);
      if (response.status === 200) {
        toast.success("Successfully!");
      } else if (response.status === 216) {
        toast.error(response.data);
      }
    };

    const handlers = {
      handleDelete, handleDownload, handleUpload, setSelectedFile, selectedFile, getProjects
    };

    return (<>
        <div className="projects-items-container">
          <h1 className="dashboard-item-header font-semibold text-xl4 ">
            Projects List:
          </h1>
          <ProjectsBar data={data} handlers={handlers}/>
        </div>
        <div className="projects-actions ">
          <h1 className="dashboard-item-header font-semibold text-xl4 ">
            Action for projects
          </h1>

          <div className="grid grid-rows-1 grid-cols-4 gap-3 mt-2 h-full w-full items-center ">
            <div className="flex flex-col items-center	">
              <label htmlFor="upload-photo" className="flex flex-col items-center cursor-pointer mb-1">
                <input style={{display: "none"}} id="upload-photo" name="file" type="file"
                       onChange={(e) => handleUpload(e)}/>
                <div className="add-btn">
                  <AddIcon/>
                </div>
              </label>
              <span>Upload</span>
            </div>
            <div className=" flex flex-col items-center	">
              <button className="add-btn" onClick={handleDownload}>
                <AddIcon/>
              </button>
              <span>Download</span>
            </div>
            <div className=" flex flex-col items-center	">
              <button className="add-btn" onClick={handleDelete}>
                <AddIcon/>
              </button>
              <span>Delete</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="add-btn" onClick={handleRename}>
                <AddIcon/>
              </button>
              <span>Rename</span>
            </div>
          </div>
        </div>
        <div className="projects-info">
          <ProjectDiag/>
        </div>
      </>
    );
  }
;
