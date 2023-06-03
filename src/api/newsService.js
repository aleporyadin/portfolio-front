import {queryParamsToQueryString} from "../utils/utils";
import newsEndpoints from "./newsEndpoints";
import axios from "../utils/axiosClient";

const {
  NEWS_API_URL
} = newsEndpoints;

const getNews = async ({page, size}) => {
  try {
    // const query = queryParamsToQueryString({
    //   country: "ua", lang: "ua", apikey: NEWS_API_KEY, page: page, max: size
    // });
    // const request = NEWS_API_URL + NEWS_TOP + query;
    const query = queryParamsToQueryString({
      page: page, size: size
    });
    const request = NEWS_API_URL + query;
    return await axios.get(request);
  } catch (error) {
    return Promise.reject(error.response);
  }
};

const NewsService = {
  getNews
};

export default NewsService;
