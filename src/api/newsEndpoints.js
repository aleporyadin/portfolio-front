const newsEndpoints = {
  BASE_URL: "https://newsapi.org/v2",
  NEWS_TOP: "/top-headlines",
  NEWS_API_KEY: `${process.env.NEWS_API_KEY}`
};
console.log(process.env);
export default newsEndpoints;
