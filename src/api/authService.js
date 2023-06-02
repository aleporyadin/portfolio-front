import axios from "../utils/axiosClient";
import apiEndpoints from "./apiEndpoints";
import { toast } from "react-toastify";
import { CANNOT_FIND_TOKEN, MESSAGE_CONNECTED_FAILED_ERROR } from "../constants/messages";

const {
  LOGIN,
  AUTH_URL,
  REGISTER
} = apiEndpoints;

const login = async (username, password) => {
  try {
    const data = {username, password};
    const request = AUTH_URL + LOGIN;
    const response = await axios.post(request, data);
    if (response.data.token) {
      sessionStorage.setItem("user", JSON.stringify(response.data));
    } else {
      console.log(CANNOT_FIND_TOKEN);
      await Promise.reject("Undefined token!");
    }
    return response.data;
  } catch (e) {
    console.log(MESSAGE_CONNECTED_FAILED_ERROR(e));
    await Promise.reject(e);
  }
};

const logout = () => {
  sessionStorage.removeItem("user");

};

const register = async (formData) => {
  try {
    const {username, email, password, avatar, firstName, lastName, birthdate} = formData;
    const data = {
      ...(username && {username: username}),
      ...(email && {email: email}),
      ...(password && {password: password}),
      ...(avatar && {avatar: avatar}),
      ...(firstName && {firstName: firstName}),
      ...(lastName && {lastName: lastName}),
      ...(birthdate && {birthdate: birthdate})
    };
    const request = AUTH_URL + REGISTER;
    const response = await axios.post(request, data);
    return response.data;
  } catch (e) {
    console.log(MESSAGE_CONNECTED_FAILED_ERROR(e));
    await Promise.reject(e);
  }
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

const AuthService = {
  login,
  register,
  logout,
  getCurrentUser
};

export default AuthService;
