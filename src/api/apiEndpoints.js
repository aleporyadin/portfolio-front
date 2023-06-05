import { LOCAL_HOST_API } from "../constants/server";

const setBaseURL = () => {
  return process.env.NODE_ENV === "production" ? `${process.env.REACT_APP_API_URL}` : LOCAL_HOST_API;
};

const apiEndpoints = {
  API_URL: setBaseURL(),

  AUTH_URL: "api/auth/",
  USER_URL: "api/users/",
  TEST_URL: "api/test/",

  FILE_UPLOAD: (userId) => { return `api/files/${userId}`;},
  FILE_LIST: (userId, params='') => { return `api/files/${userId}`+params;},
  FILE_DOWNLOAD: (userId, fileId) => { return `api/files/${userId}/${fileId}`;},
  FILE_DELETE: (userId, fileId) => { return `api/files/${userId}/${fileId}`;},
  FILE_RENAME: (userId, fileId, newName) => { return `api/files/${userId}/${fileId}?newName=${newName}`;},

  USER_AVATAR: (avatarPath) => { return `api/users/avatars/${avatarPath}`;},


  USER: "api/auth/user",
  LOGIN: "login",
  LOGOUT: "logout",
  REGISTER: "register"
};

export default apiEndpoints;
