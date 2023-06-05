import {Box, Button, CircularProgress, Grid} from "@mui/material";
import moment from "moment";
import React, {useEffect, useState} from "react";
import "./index.css";
import NewsService from "../../api/newsService";

export const NewsBar = () => {
  const [data, setData] = useState({
    news: [],
    count: 0,
    loading: true,
    error: "",
    page: 0,
    size: 10
  });

  const getNews = async () => {
    setData({...data, loading: true});
    try {
      const response = await NewsService.getNews({page: data.page, size: data.size}); //Promise;//
      const content = response.data.content;
      if (content.length) {
        setData({
          ...data,
          news: [...data.news, ...content],
          last: content.last,
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
    getNews();
  }, []);

  const handleLoadMore = () => {
    getNews();
  };

  return (
    <div className="news-container">
      {data.news.map((article, index) => (
        <div key={index} className="projcard projcard-blue">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={article.image} alt="news-image"/>
            <div className="projcard-textbox">
              <div className="projcard-title">{article.title}</div>
              <div className="projcard-subtitle">{moment(article.publishedAt).format("DD/MM/YY hh:mm")}</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                {article.description}
              </div>
              <div className="read-more">
                <p>
                  <a href={article.url} target="_blank" rel="noreferrer">Read More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {!data.last &&
        <div className="w-full flex justify-center">
        {data.loading && <CircularProgress/>}
        {data.error && <p>{data.error}</p>}
        {!data.loading && !data.error && (
          <Button onClick={handleLoadMore}>Load More</Button>
        )}
      </div>
      }
    </div>
  );
};
