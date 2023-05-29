import { Box, Button, Grid } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "./index.scss";
import NewsService from "../../api/newsService";

export const NewsList = () => {
  const [data, setData] = useState({
    news: [],
    count: 0,
    loading: true,
    error: "",
    page: 1,
    size: 10
  });
  console.log(data);
  const getNews = async () => {
    setData({...data, loading: true});
    try {
      const response = await NewsService.getNews({page: data.page, size: data.size});
      if (response.articles.length) {
        setData({
          ...data,
          news: [...data.news, ...response.articles],
          count: response.totalResults,
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
        <div key={index} className="news-item-container">
          <div className="news-header flex flex-col">
            <h3 className="bold">{article.author}</h3>
            <small>{moment(article.publishedAt).format("DD/MM/YY hh:mm")}</small>
          </div>
          <div className="news-content">
            <div>
              <p className="underline">
                <a href={article.url} target="_blank">{article.title}</a>
              </p>
              <span>{article.author}</span>
            </div>
          </div>
          <div className="news-image-container">
            <img src={article.urlToImage} width="350px" height="300px" alt=""/>
          </div>
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
