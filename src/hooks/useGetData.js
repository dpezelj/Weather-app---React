import { useState, useEffect } from "react";
import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { api } from "../api";


export const useGetData = () => {

  const [weather, setWeather] = useState();
  const { value, setContextValue } = useContext(LocationContext);

  useEffect(() => {
    const getData = async () => {
      const geolocationAPI = navigator.geolocation;

      if (!geolocationAPI) {
        console.log("Geolocation not working!");
        return;
      }

      if (!value.searchValue) {
        geolocationAPI.getCurrentPosition(async ({ coords }) => {
          const { longitude, latitude } = coords;

          const weatherData = await api.getWeatherByCoords(latitude, longitude);

          const { error = null, location, current, alerts, forecast } = weatherData;

          if (!error) {
            setWeather({ location, current, alerts, forecast });
            return;
          }
          setContextValue({ error });
        });
      } else {
        const weatherData = await api.getWeatherByName(value.searchValue);

        const { error = null, location, current, alerts, forecast } = weatherData;

        if (!error) {
          setWeather({ location, current, alerts, forecast });
          return;
        }
        setContextValue({ error });
      }
    };

    getData();
  }, [value.searchValue, setContextValue]);
  return {weather}
}