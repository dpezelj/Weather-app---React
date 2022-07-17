import { useState, useEffect } from "react";
import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { Header, Card, WindInfo } from "../components";
import { api } from "../api";
import { Alerts } from "../components/Alerts";

const Home = () => {
  const [weather, setWeather] = useState();
  const { value, setContextValue } = useContext(LocationContext);

  useEffect(() => {
    const callMe = async () => {
      const geolocationAPI = navigator.geolocation;

      if (!geolocationAPI) {
        console.log("Geolocation not working!");
        return;
      }

      if (!value.searchValue) {
        geolocationAPI.getCurrentPosition(async ({ coords }) => {
          const { longitude, latitude } = coords;

          const weatherData = await api.getWeatherByCoords(latitude, longitude);

          const { error = null, location, current, alerts } = weatherData;

          if (!error) {
            setWeather({ location, current, alerts });
            return;
          }
          setContextValue({ error });
        });
      } else {
        const weatherData = await api.getWeatherByName(value.searchValue);

        const { error = null, location, current, alerts } = weatherData;

        if (!error) {
          setWeather({ location, current, alerts });
          return;
        }
        setContextValue({ error });
      }
    };

    callMe();
  }, [value.searchValue, setContextValue]);

  if (!weather) return null;

  const {
    location: { name, region, country, tz_id: timezone },
  } = weather;

  const {
    current: { wind_kph, wind_dir, gust_kph, wind_degree },
  } = weather;

  return (
    <div>
      <Header
        name={name}
        region={region}
        country={country}
        timezone={timezone}
        isDay={weather.current.is_day}
      />

      <Card value={weather} />

      <WindInfo
        windSpeed={wind_kph}
        windDegree={wind_degree}
        windDir={wind_dir}
        windGust={gust_kph}
      />

      <Alerts alertData={weather.alerts} />
    </div>
  );
};
export { Home };
