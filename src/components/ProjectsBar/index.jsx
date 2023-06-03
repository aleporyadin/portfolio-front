import React from "react";
import "./index.css";

const ProjectsBar = ({projectsList, handlers}) => {
  const {setSelectedFile, selectedFile} = handlers;
  const setStyleTransaction = (item) => {
    return (selectedFile === item) ? "selected-file" : "";
  };
  const onClick = (item) => {
    setSelectedFile(item);
  };

  return (
    <div className="files-container">
      <ul className="files-list">
        {projectsList.map((file) => (
          <li key={file.id} className={`files-list-item ${setStyleTransaction(file)}`}
              onClick={() => onClick(file)}>
            <div className="truncate ">{file.name}</div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ProjectsBar;
