import { LOCAL_HOST_API } from "../constants/server";

const setBaseURL = () => {
  return process.env.NODE_ENV === "production" ? `${process.env.REACT_APP_API_URL}` : LOCAL_HOST_API;
};

const apiEndpoints = {
  API_URL: setBaseURL(),

  AUTH_URL: "api/auth/",
  TEST_URL: "api/test/",

  LOGIN: "login",
  LOGOUT: "logout",
  REGISTER: "register"
};

export default apiEndpoints;
