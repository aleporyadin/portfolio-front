import weatherEndpoints from "./weatherEndpoints";
import IpInfoService from "./ipInfoService";

const {
  WEATHER_API_URL,
  FORECAST,
  WEATHER_API_KEY
} = weatherEndpoints;

const getWeather = async () => {
  try {
    const location = await IpInfoService.getIpInfo();
    const request = `${WEATHER_API_URL}${FORECAST}?key=${WEATHER_API_KEY}&q=${location.city}&days=6`;
    return await fetch(request).then(res => res.json());
  } catch (e) {
    console.error("Error fetching weather forecast:", e);
  }
};

const WeatherService = {
  getWeather
};

export default WeatherService;
