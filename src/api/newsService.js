import axios from "axios";
import { queryParamsToQueryString } from "../utils/utils";
import newsEndpoints from "./newsEndpoints";

const {
  BASE_URL,
  NEWS_TOP
} = newsEndpoints;

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const getNews = async ({ page, size }) => {
  try {
    const query = queryParamsToQueryString({
      country: "ua", apiKey: NEWS_API_KEY, page: page, pageSize: size
    });
    const request = BASE_URL + NEWS_TOP + query;
    const response = await axios.get(request);
    return response.data;
  } catch (error) {
    return Promise.reject(error.response);
  }
};

const NewsService = {
  getNews
};

export default NewsService;
