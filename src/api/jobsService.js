import jobsEndpoints from "./jobsEndpoints";
import { queryParamsToQueryString } from "../utils/utils";

const {
  JOBS_API_URL,
  JOBS_API_KEY
} = jobsEndpoints;

const getJobs = async () => {
  const query = queryParamsToQueryString({keywords: "it", location: "Bern"});
  const request = `${JOBS_API_URL}${JOBS_API_KEY}` + query;
  //TODO: jjjj
  try {
    const response = await fetch("https://www.arbeitnow.com/api/job-board-api").then(res=>res.json());
    console.log(response);
  } catch (e) {
    console.error("Error fetching weather forecast:", e);

  }

};

const JobsService = {
  getJobs
};

export default JobsService;
