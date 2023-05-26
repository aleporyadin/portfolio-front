import axios from "axios";
import { toast } from "react-toastify";
import apiEndpoints from "../api/apiEndpoints";

axios.defaults.baseURL = apiEndpoints.BASE_URL; // api base url

const NONCE_PRECISION = 1e4,
  API_JSON = "application/vnd.api+json";
// SPLITTER = "//"
// API_KEY = "api-key",
// API_SECRET = "api-secret",
// X_API_KEY = "x-api-key",
// X_API_KEY_URL = ["v2", "v3"];

// function calcDataToCrypt(config, nonce) {
//   const { data, url, method, baseURL } = config;
//   const dataString = data ? `|${toQuery(data)}` : "";
//   const normalizeMethod = method.toUpperCase();
//   const normalizeUrl = `${baseURL.split(SPLITTER)[1]}/${url}`;
//   return `${nonce.toString()}|${normalizeMethod}|${normalizeUrl.replace(
//     /'/g,
//     "%27"
//   )}${dataString}`;
// }

axios.interceptors.request.use(
  (config) => {
    const newConfig = config;

    newConfig.headers["Content-Type"] = API_JSON;
    newConfig.headers.Accept = API_JSON;

    // const isXApiKeyVersion = X_API_KEY_URL.includes(config.url.split("/")[0]);

    // if (isXApiKeyVersion) {
    //   newConfig.headers["X-Api-Key"] = getLocalItem(X_API_KEY);
    //   return newConfig;
    // }

    // const dataToCrypt = calcDataToCrypt(config, nonce);
    // const key = getLocalItem(API_KEY) || process.env.REACT_APP_API_KEY;
    // const secret = getLocalItem(API_SECRET) || process.env.REACT_APP_API_SECRET;
    // const sign = CryptoJS.HmacSHA512(dataToCrypt, secret).toString();

    // newConfig.headers.nonce = Date.now() * NONCE_PRECISION;
    // newConfig.headers.Sign = sign;
    // newConfig.headers.Key = key;

    return newConfig;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const message = error.response.data.detail;
      if (message) {
        if (error.response.status === 500) {
          toast.error(message);
        } else if (error.response.status === 402) {
          toast.error(message);
        } else if (error.response.status === 401) {
          toast.warning(message);
        } else if (error.response.status === 404) {
          toast.error(message);
        } else if (error.response.status === 403) {
          toast.warning(message);
        } else if (error.response.status === 400) {
          toast.error(message);
        }
      } else {
        toast.error("Unknown error");
      }
      console.log("error", error);
    }

    return Promise.reject(error);
  }
);

export default axios;
