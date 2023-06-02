import React from "react";
import "./index.css";

const ProjectsBar = ({projectsList, handlers}) => {
  const {handleDownload, handleDelete, handleUpload, handleFileChange, setSelectedFile, selectedFile} = handlers;
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
      <div>
        <input type="file" onChange={handleFileChange}/>
        <button onClick={handleUpload}>Upload</button>
        {/*<button onClick={() => handleDownload()}>Download</button>*/}
        {/*<button onClick={() => handleDelete(file)}>Delete</button>*/}
      </div>
    </div>
  );
};

export default ProjectsBar;
