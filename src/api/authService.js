import axios from "../utils/axiosClient";
import apiEndpoints from "./apiEndpoints";

const {
  LOGIN,
  AUTH_URL,
  REGISTER
} = apiEndpoints;

const login = async (username, password) => {
  try {
    const data = { username, password };
    const request = AUTH_URL + LOGIN;
    const response = await axios.post(request, data);

    if (response.data.token) {
      sessionStorage.setItem("user", JSON.stringify(response.data));
    } else {
      await Promise.reject("Undefined token!");
    }
    return response.data;
  } catch (e) {
    await Promise.reject(e);
  }
};

const logout = () => {
  sessionStorage.removeItem("user");
};

const register = async (data) => {
  try {
    const { username, email, password, avatar, firstName, lastName, birthdate } = data;
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("birthdate", birthdate);
    const request = AUTH_URL + REGISTER;
    const response = await axios.post(request, formData);
    return response.data;
  } catch (e) {
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
