/*import { LocationContext } from "../contexts/LocationContext";
import { useContext } from "react";
const apiKey = "8ef102dbbdfd46d1abb203040211309";
const GetLocationData = () => {
  const { value, setContextValue } = useContext(LocationContext);

  // console.log(value);
  if (value.searchValue) {
    //get data from api based on search value
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${value.searchValue}&days=1&aqi=yes&alerts=yes`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          setContextValue({ error: result.error });
        } else {
          const mapData = ({ location, current }) => ({ location, current });
          setContextValue(mapData(result));
        }
      });
  } 
  if(!value.searchValue || value.searchValue) {
    //get data from api based on lat long
    /* const geolocationAPI = navigator.geolocation;

    if (!geolocationAPI) {
      console.log("Geolocation not working!");
    } else {
      geolocationAPI.getCurrentPosition(({ coords }) => {
        const { longitude, latitude } = coords;
        console.log(coords.longitude, coords.latitude);
        const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${coords.latitude},${coords.longitude}&days=1&aqi=yes&alerts=yes`;

        fetch(apiUrl)
          .then((response) => response.json())
          .then((result) => {
            if (result.error) {
              setContextValue({ error: result.error });
            } else {
              const mapData = ({ location, current }) => ({
                location,
                current,
              });
              setContextValue(mapData(result));
            }
          });
      }); 
  }
};

export default GetLocationData;*/
