import React, {useEffect, useState} from "react";
import "./index.css";
import JobsService from "../../api/jobsService";
import {Button, Chip} from "@mui/material";

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
    getJobs().then();
  }, []);

  const handleLoadMore = () => {
    getJobs().then();
  };

  useEffect(() => {
  }, [data]);

  return (
    <div className="jobs-container ">
      {data.jobs.length && data.jobs.map((job, key) => (
        <div key={key} className="jobs-item-container grid grid-rows-2 grid-cols-3">
          <div className="job-company flex flex-col row-start-1 col-span-2">
            <span className="font-semibold">{job.company_name}</span>
            <a href={job.url} target="_blank" className="cursor-pointer underline font-bold"
               rel="noreferrer">  {job.title}</a>
          </div>
          <div className="col-start-1 row-start-2  items-center">
            Location: {job.location}
          </div>
          <div className="col-start-2 row-start-2">
            Remote: {job.remove ? "YES" : "NO"}
          </div>
          <div className="col-start-3 row-span-full grid col-start-2 grid-cols-3">
            <span>Tags:</span>
            <span className="col-span-2 break-all mb-1">
            {(job?.job_types && job.job_types.length !== 0)
              ? job.job_types.map((type, index) =>
                <Chip label={type} key={index} className="ml-1 mb-1"/>)
              : "n/a"
            }
          </span>
          </div>
        </div>
      ))}
      <div className="w-full flex justify-center">
        {data.loading && <p>Loading...</p>}
        {data.error && <p>{data.error}</p>}
        {!data.loading && !data.error && (
          <Button onClick={handleLoadMore}>Load More</Button>
        )}
      </div>

    </div>
  );
};

export default JobsBar;
