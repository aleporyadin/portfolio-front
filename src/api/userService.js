import axios from "axios";
import apiEndpoints from "./apiEndpoints";
import authHeader from "./authHeader";

const {
  BASE_URL,
  TEST_URL
} = apiEndpoints;

const API = BASE_URL + TEST_URL;
const getPublicContent = () => {
  return axios.get(API + "all");
};

const getUserBoard = () => {
  return axios.get(API + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard
};

export default UserService;
