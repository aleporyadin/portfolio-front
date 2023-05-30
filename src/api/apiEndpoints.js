import { LOCAL_HOST } from "../constants/server";

const setBaseURL = () => {
  return process.env.APP_ADDRESS ? "" : LOCAL_HOST;
};

const apiEndpoints = {
  BASE_URL: setBaseURL(),

  // BASE_URL: `${process.env.APP_ADDRESS}`,

  AUTH_URL: "api/auth/",
  TEST_URL: "api/test/",

  LOGIN: "login",
  LOGOUT: "logout",
  REGISTER: "register"
};

export default apiEndpoints;
