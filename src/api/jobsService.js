import jobsEndpoints from "./jobsEndpoints";
import { queryParamsToQueryString } from "../utils/utils";

const {
  JOBS_API_URL
} = jobsEndpoints;

const getJobs = async ({page, size}) => {
  try {
    const query = queryParamsToQueryString({
      page: page, pageSize: size
    });
    const request = JOBS_API_URL + query;
    return await fetch(request).then(res => res.json());
  } catch (e) {
    console.error("Error fetching weather forecast:", e);
  }
};

const JobsService = {
  getJobs
};

export default JobsService;
