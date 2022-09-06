import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { Header, Card } from "../components";
import { useGetData } from "../hooks/useGetData";
import { AstronomyInfo } from "../components/AstronomyInfo";
const Astronomy = () => {
  const { value } = useContext(LocationContext);
  const {weather} =  useGetData()
  if(!weather) return null;
    const {forecast } = weather
    console.log(forecast.forecastday[0].astro.moon_phase)
    const {
      location: { name, region, country, tz_id: timezone },
    } = weather;

  console.log(weather)
  return (
    <div>
{ <Header
      location={"astronomy"}
        name={name}
        region={region}
        country={country}
        timezone={timezone}
        isDay={true}
        moonPhase={forecast.forecastday[0].astro.moon_phase}
      /> }
      <AstronomyInfo data={forecast.forecastday[0].astro} />
    </div>
    
  )
};

export { Astronomy };
