const apiKey = "8ef102dbbdfd46d1abb203040211309";
const BASE_API_URI = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;

const mapParamsToQueryParams = (params) =>
  Object.entries(params).reduce(
    (acc, [key, value]) => `${acc}&${key}=${value}`,
    ""
  );

export const api = {
  getWeatherByName: async (
    q,
    { days = "1", aqi = "yes", alerts = "yes", ...rest } = {}
  ) => {
    const fullUrl = `${BASE_API_URI}${mapParamsToQueryParams({
      q,
      days,
      aqi,
      alerts,
      ...rest,
    })}`;
    return fetch(fullUrl).then((res) => res.json());
  },

  getWeatherByCoords: async (
    latitude,
    longitude,
    { days = "1", aqi = "yes", alerts = "yes", ...rest } = {}
  ) => {
    const q = `${latitude},${longitude}`;
    const fullUrl = `${BASE_API_URI}${mapParamsToQueryParams({
      q,
      days,
      aqi,
      alerts,
      ...rest,
    })}`;
    return fetch(fullUrl).then((res) => res.json());
  },
};
