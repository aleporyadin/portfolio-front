import {LOCAL_HOST} from "../constants/server";

const setBaseURL = () => {
    return process.env.NODE_ENV === "production" ? `${process.env.API_URL}` : LOCAL_HOST;
};
console.log(`${API_URL}`, API_URL, `${process.env.API_URL}`)
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
