import React, { useEffect, useState } from "react";
import WeatherService from "../../api/weatherService";
import "./index.css";
import moment from "moment/moment";
import { Button } from "@mui/material";
import JobsService from "../../api/jobsService";

const JobsBar = () => {
  const [data, setData] = useState({
    jobs: [],
    links: {next: null, last: null},
    loading: true,
    error: "",
    page: 1,
    size: 10
  });

  const getJobs = async () => {
    setData({...data, loading: true});
    try {
      const response = await JobsService.getJobs({page: data.page, size: data.size});
      if (response.data.length) {
        setData({
          ...data,
          jobs: [...data.jobs, ...response.data],
          loading: false,
          page: data.page + 1
        });
      } else {
        setData({...data, loading: false});
      }
    } catch (error) {
      console.error(error);
      setData({...data, loading: false, error: "Cannot load news.."});
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const handleLoadMore = () => {
    getJobs();
  };

  return (
    <div className="jobs-container">
      {data.jobs.length && data.jobs.map((job, key) => (
        <div key={key} className="jobs-item-container grid grid-rows-2 grid-cols-3">
          <div className="job-company col-start-1">{job.company_name}</div>

          <div className="job-title col-start-1 ">
            <a href={job.url} className="cursor-pointer">  {job.title}</a>
          </div>
          <div className="col-start-2 row-start-1">
            <span className="mr-3">Location: {job.location}</span></div>
          <div className="col-start-2 row-start-2">
            <span className="mr-3">Remote: {job.remove ? "YES" : "NO"}</span>
          </div>
          {job.job_types.length > 0 && <div className="col-start-3 row-start-1 ">
            <span>Tags:</span>
            <div className="ml-3 break-all">
              {job.job_types.map((type, key) => {
                return <span key={key} className="bg-gray rounded-xl px-1.5 py-0.5 mr-2 mb-0.5">{type}</span>;
              })}
            </div>
          </div>
          }


        </div>
      ))}
      {data.loading && <p>Loading...</p>}
      {data.error && <p>{data.error}</p>}
      {!data.loading && !data.error && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </div>
  );
};

export default JobsBar;
