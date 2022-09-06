import { useState, useEffect } from "react";
import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { Header, Card, WindInfo } from "../components";
import { api } from "../api";
import { Alerts } from "../components/Alerts";
import { useGetData } from "../hooks/useGetData";

const Home = () => {
  const {weather} = useGetData()
  
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
      location={"home"}
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
