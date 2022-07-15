const apiKey = "8ef102dbbdfd46d1abb203040211309";
const BASE_API_URI = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;

const mapParamsToQueryParams = (params) =>
  Object.entries(params).reduce(
    (acc, [key, value]) => `${acc}&${key}=${value}`,
    ""
  );

/* const banana = [1, 2, 3, 4, 5];

  const sum = banana.reduce((acc, curr) => acc + curr, 0);

  console.log(sum); */

// api.getWeatherByName(name, {  days = "2",
// aqi = "yes",
//alerts = "no"})

// api.getWeatherByCoords(lat, long)

export const api = {
  getWeatherByName: async ({
    name: q,
    days = "1",
    aqi = "yes",
    alerts = "yes",
    ...rest
  }) => {
    const fullUrl = `${BASE_API_URI}${mapParamsToQueryParams({
      q,
      days,
      aqi,
      alerts,
      ...rest,
    })}`;
    console.log(fullUrl);
    return fetch(fullUrl).then((res) => res.json());
  },

  getWeatherByCoords: async ({
    latitude,
    longitude,
    days = "1",
    aqi = "yes",
    alerts = "yes",
    ...rest
  }) => {
    const q = `${latitude},${longitude}`;

    const fullUrl = `${BASE_API_URI}${mapParamsToQueryParams({
      q,
      days,
      aqi,
      alerts,
      ...rest,
    })}`;
    console.log(fullUrl);
    return fetch(fullUrl).then((res) => res.json());
  },
};
