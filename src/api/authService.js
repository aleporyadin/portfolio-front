import axios from "../utils/axiosClient";
import apiEndpoints from "./apiEndpoints";
import {CANNOT_FIND_TOKEN, MESSAGE_CONNECTED_FAILED_ERROR} from "../constants/messages";

const {
  LOGIN,
  AUTH_URL,
  REGISTER,
  USER_AVATAR
} = apiEndpoints;
const login = async (username, password) => {
  try {
    const data = {username, password};
    const request = AUTH_URL + LOGIN;
    const response = await axios.post(request, data);

    if (response.data.token) {
      const {token, avatarPath, ...userData} = response.data;
      if (avatarPath) {
        const avatarResponse = await axios.get(USER_AVATAR(avatarPath));
        console.log(avatarResponse);
        if (avatarResponse) {
          const avatarBlob = await avatarResponse.data.blob();
          userData.avatarUrl = URL.createObjectURL(avatarBlob);
          console.log(avatarResponse, avatarBlob);
        }
      }
      sessionStorage.setItem("user", JSON.stringify(userData));
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
    const data = new FormData();
    firstName && data.append("firstName", firstName);
    lastName && data.append("lastName", lastName);
    birthdate && data.append("firstName", birthdate);
    avatar && data.append("avatar", avatar);
    password && data.append("password", password);
    email && data.append("email", email);
    username && data.append("username", username);

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
