import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

export const ProjectsBar = () => {
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchFileList();
  }, []);

  const fetchFileList = async () => {
    try {
      const response = await axios.get('/api/files/list/1'); // Replace '1' with the appropriate user ID
      setFileList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('userId', 1); // Replace '1' with the appropriate user ID

      try {
        const response = await axios.post('/api/files/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(response.data); // Display success message
        fetchFileList(); // Refresh the file list
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleFileDelete = async (fileName) => {
    try {
      const response = await axios.delete(`/api/files/delete/1/${fileName}`); // Replace '1' with the appropriate user ID
      console.log(response.data); // Display success message
      fetchFileList(); // Refresh the file list
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>File List</h2>
      <ul>
        {fileList.map((fileName) => (
          <li key={fileName}>
            {fileName}
            <button onClick={() => handleFileDelete(fileName)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Upload File</h2>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
