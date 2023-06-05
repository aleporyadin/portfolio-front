import React from "react";
import "./index.css";
import {Button, CircularProgress} from "@mui/material";

const ProjectsBar = ({data, handlers}) => {
  const {setSelectedFile, selectedFile, getProjects} = handlers;
  const setStyleTransaction = (item) => {
    return (selectedFile === item) ? "selected-file" : "";
  };
  const onClick = (item) => {
    setSelectedFile(item);
  };

  const handleLoadMore = () => {
    getProjects();
  };

  return (
    <div className="files-container">
      <ul className="files-list">
        {data?.files && data.files.map((file) => (
          <li key={file.id} className={`files-list-item ${setStyleTransaction(file)}`}
              onClick={() => onClick(file)}>
            <div className="truncate ">{file.name}</div>
          </li>
        ))}
      </ul>
      {!data.last &&
        <div className="w-full flex justify-center">
          {data.loading && <CircularProgress/>}
          {data.error && <p>{data.error}</p>}
          {!data.loading && !data.error && (
            <Button onClick={handleLoadMore}>Load More</Button>
          )}
        </div>
      }
    </div>
  );
};

export default ProjectsBar;
