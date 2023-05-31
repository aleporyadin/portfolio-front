import ipInfoEndpoints from "./ipInfoEndpoints";
import { queryParamsToQueryString } from "../utils/utils";

const {
  IP_CONFIG_API_URL,
  IP_CONFIG_API_KEY,
  IP_CONFIG_API_DNS
} = ipInfoEndpoints;

const getIpInfo = async () => {
  try {
    const query = queryParamsToQueryString({
      token: IP_CONFIG_API_KEY
    });
    const request = IP_CONFIG_API_URL + IP_CONFIG_API_DNS + query;
    return await fetch(request).then(res => res.json());
  } catch (error) {
    return Promise.reject(error.response);
  }
};

const IpInfoService = {
  getIpInfo
};

export default IpInfoService;
