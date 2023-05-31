import { queryParamsToQueryString } from "../utils/utils";
import newsEndpoints from "./newsEndpoints";

const {
  NEWS_API_URL,
  NEWS_TOP,
  NEWS_API_KEY
} = newsEndpoints;

const getNews = async ({page, size}) => {
  try {
    const query = queryParamsToQueryString({
      country: "ua", apiKey: NEWS_API_KEY, page: page, pageSize: size
    });
    const request = NEWS_API_URL + NEWS_TOP + query;
    return await fetch(request).then(res => res.json());
  } catch (error) {
    return Promise.reject(error.response);
  }
};

const NewsService = {
  getNews
};

export default NewsService;
