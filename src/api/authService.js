import axios from "../utils/axiosClient";
import apiEndpoints from "./apiEndpoints";
import {CANNOT_FIND_TOKEN, MESSAGE_CONNECTED_FAILED_ERROR} from "../constants/messages";
import LocalStorageUtil from "../utils/LocalStorage";

const {
  LOGIN,
  AUTH_URL,
  REGISTER,
  USER,
  USER_AVATAR
} = apiEndpoints;
const login = async (username, password) => {
  try {
    const data = {username, password};
    const request = AUTH_URL + LOGIN;
    const response = await axios.post(request, data);
    if (response.data.token) {
      const {avatarPath} = response.data;
      if (avatarPath) {
        const avatarResponse = await axios.get(USER_AVATAR(avatarPath), {responseType: 'blob'});
        if (avatarResponse) {
          response.data.avatarUrl = URL.createObjectURL(avatarResponse.data);
        }
      }
    } else {
      console.log(CANNOT_FIND_TOKEN);
      await Promise.reject('Undefined token!');
    }
    LocalStorageUtil.setItem("ebotnya", response.data.token);
    sessionStorage.setItem("user", JSON.stringify(response.data));
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

const getCurrentUser = async () => {
  try {
    const token = LocalStorageUtil.getItem('ebotnya');
    if (token) {
      const config = {
        headers: {
          Authorization: `SOUL ${token}`
        }
      };
      const response = await axios.get(AUTH_URL + USER, config);
      const {avatarPath} = response.data;
      if (avatarPath) {
        const avatarResponse = await axios.get(USER_AVATAR(avatarPath), {responseType: 'blob'});
        if (avatarResponse) {
          response.data.avatarUrl = URL.createObjectURL(avatarResponse.data);
        }
      }
      return response.data;
    } else {
      console.log(CANNOT_FIND_TOKEN);
      await Promise.reject('Undefined token!');
    }
  } catch (e) {
    console.log(MESSAGE_CONNECTED_FAILED_ERROR(e));
    await Promise.reject(e);
  }
};

const AuthService = {
  login,
  register,
  logout,
  getCurrentUser
};

export default AuthService;
