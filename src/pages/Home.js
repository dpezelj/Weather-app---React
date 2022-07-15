import { useState, useEffect } from "react";
import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { Card } from "../components";
import { Header } from "../components/Header";

import { api } from "../api";

const Home = () => {
  const [weather, setWeather] = useState();
  const { value, setContextValue } = useContext(LocationContext);

  useEffect(() => {
    console.log("testeetsetd");
    const callMe = async () => {
      const geolocationAPI = navigator.geolocation;

      if (!geolocationAPI) {
        console.log("Geolocation not working!");
        return;
      }

      if (!value.searchValue) {
        geolocationAPI.getCurrentPosition(async ({ coords }) => {
          const { longitude, latitude } = coords;

          const weatherData = await api.getWeatherByCoords({
            latitude,
            longitude,
          });

          const { error = null, location, current } = weatherData;

          if (!error) {
            setWeather({ location, current });
            return;
          }
          setContextValue({ error });
        });
      } else {
        const weatherData = await api.getWeatherByName({
          name: value.searchValue,
        });

        const { error = null, location, current } = weatherData;

        if (!error) {
          setWeather({ location, current });
          return;
        }
        setContextValue({ error });
      }
    };

    callMe();
  }, [value.searchValue]);

  if (!weather) return null;

  const {
    location: { name, region, country, tz_id: timezone },
  } = weather;

  return (
    <div>
      <Header
        name={name}
        region={region}
        country={country}
        timezone={timezone}
      />
      <div className="items-center justify-center flex">
        <Card value={weather} />
      </div>
    </div>
  );
};
export { Home };
