import apiEndpoints from "./apiEndpoints";
import axios from "../utils/axiosClient";
import {queryParamsToQueryString} from "../utils/utils";

const {FILE_DELETE, FILE_DOWNLOAD, FILE_UPLOAD, FILE_LIST, FILE_RENAME} = apiEndpoints;
const getFiles = async ({userId, page, size}) => {
  console.log(userId);
  try {
    const query = queryParamsToQueryString({page, size});
    return await axios.get(FILE_LIST(userId, query));
  } catch (e) {
    console.log(e);
    await Promise.reject(e);
  }
};

const uploadFile = async (userId, formData) => {
  try {
    return await axios.post(FILE_UPLOAD(userId), formData);
  } catch (e) {
    console.log(e);
    await Promise.reject(e);
  }
};

const downloadFile = async (userId, fileId) => {
  try {
    const response = await axios.get(FILE_DOWNLOAD(userId, fileId), {
      responseType: 'blob' // Ensure the response is treated as a Blob
    });
    const contentType = response.headers['content-type'];

    // Create a temporary download link
    const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute('download', `file.${getFileExtension(contentType)}`);
    document.body.appendChild(link);
    link.click();

    // Clean up the temporary download link
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  } catch (e) {
    console.error('Failed to download file:', e);
    await Promise.reject(e);
  }
};

const getFileExtension = (contentType) => {
  switch (contentType) {
    case 'image/png':
      return 'png';
    case 'text/plain':
      return 'txt';
    default:
      return 'file';
  }
};


const deleteFile = async (userId, fileId) => {
  try {
    await axios.delete(FILE_DELETE(userId, fileId));
  } catch (e) {
    console.log(e);
    await Promise.reject(e);
  }
};

const renameFile = async (userId, fileId, newName) => {
  try {
    await axios.put(FILE_RENAME(userId, fileId, newName));
  } catch (error) {
    console.error("Failed to rename file:", error);
  }
};

const ProjectService = {
  getFiles,
  uploadFile,
  downloadFile,
  deleteFile,
  renameFile
};

export default ProjectService;
