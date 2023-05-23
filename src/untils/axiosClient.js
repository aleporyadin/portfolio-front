import axios from "axios";

// axios.defaults.baseURL = endpoints.baseURL; // api base url
// axios.interceptors.request.use(
//   (config) => {
//     const newConfig = config;
//
//     newConfig.headers["Content-Type"] = API_JSON;
//     newConfig.headers.Accept = API_JSON;
//
//     const isXApiKeyVersion = X_API_KEY_URL.includes(config.url.split("/")[0]);
//
//     if (isXApiKeyVersion) {
//       newConfig.headers["X-Api-Key"] = getLocalItem(X_API_KEY);
//       return newConfig;
//     }
//
//     const nonce = Date.now() * NONCE_PRECISION;
//     const dataToCrypt = calcDataToCrypt(config, nonce);
//     const key = getLocalItem(API_KEY) || process.env.REACT_APP_API_KEY;
//     const secret = getLocalItem(API_SECRET) || process.env.REACT_APP_API_SECRET;
//     const sign = CryptoJS.HmacSHA512(dataToCrypt, secret).toString();
//
//     newConfig.headers.nonce = nonce;
//     newConfig.headers.Sign = sign;
//     newConfig.headers.Key = key;
//
//     return newConfig;
//   },
//   (error) => Promise.reject(error)
// );

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.log("error", error);
      if (error.response.status === 500) {
        alert("Internal Server Error!", "error");
      } else if (error.response.status === 402) {
        alert(error.response, "error");
      } else if (error.response.status === 401) {
        alert("Unauthorized!", "warning");
      } else if (error.response.status === 404) {
        alert("Something went wrong!", "error");
      } else if (error.response.status === 403) {
        alert("Access Forbidden!", "warning");
      } else if (error.response.status === 400) {
        alert("Something went wrong!", "error");
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
