import { CardBasicItem } from "./CardBasicItem";

export const Card = (props) => {
  const current = props?.value?.current;
  return (
    <div className="items-center justify-center flex">
      <div className="flex w-9/12 h-auto bg-light_secondary dark:bg-dark_tertiary shadow-xl rounded-xl mt-5 justify-around p-5">
        <div className="flex w-1/2 h-2/3 bg-light_tertiary dark:bg-dark_secondary shadow-xl rounded-xl m-3 p-3 flex-col">
          <div className="w-full font-extrabold text-center pb-2 border-b-2 border-dark_primary tracking-wider">
            CURRENT WEATHER
          </div>
          <div className="flex justify-around border-b-2 border-dark_primary">
            <img className="my-2" src={current?.condition?.icon} alt=""></img>
            <pre className="text-3xl font-extrabold pt-5">
              {Math.round(current?.temp_c)} °C
            </pre>
          </div>
          <CardBasicItem
            name={"Feels like"}
            value={current?.feelslike_c}
            unit={" °C"}
          />
          <CardBasicItem
            name={"Pressure"}
            value={current?.pressure_mb}
            unit={" hPa"}
          />
          <CardBasicItem
            name={"Humidity"}
            value={current?.humidity}
            unit={" %"}
          />
          <CardBasicItem name={"UV Index"} value={current?.uv} unit={""} />
          <CardBasicItem
            name={"Visibility"}
            value={current?.vis_km}
            unit={" km"}
          />
          <CardBasicItem
            name={"Precip"}
            value={current?.precip_mm}
            unit={" mm"}
          />
        </div>
        <div className="flex w-1/2 h-2/3 bg-light_tertiary dark:bg-dark_secondary shadow-xl rounded-xl m-3 p-3 flex-col">
          <div className="w-full font-extrabold text-center pb-2 border-b-2 border-dark_primary tracking-wider">
            AIR QUALITY
          </div>
          <div className="flex justify-around border-b-2 border-dark_primary p-3.5">
            <div className="my-2 text-3xl font-extrabold"> INDEX</div>
            <pre className="text-3xl font-extrabold pt-2">
              {current?.air_quality?.["gb-defra-index"]}
            </pre>
          </div>
          <CardBasicItem
            name={"[CO] Carbon monoxide"}
            value={Math.round(current?.air_quality?.co)}
            unit={" µg/m³"}
          />
          <CardBasicItem
            name={`[NO₂] Nitrogen dioxide`}
            value={Math.round(current?.air_quality?.no2)}
            unit={" µg/m³"}
          />
          <CardBasicItem
            name={"[O₃] Ozone"}
            value={Math.round(current?.air_quality?.o3)}
            unit={" µg/m³"}
          />
          <CardBasicItem
            name={"[SO₂] Sulfur dioxide"}
            value={Math.round(current?.air_quality?.so2)}
            unit={" µg/m³"}
          />
          <CardBasicItem
            name={"[PM2.5] Particulate matter"}
            value={Math.round(current?.air_quality?.pm2_5)}
            unit={" µg/m³"}
          />
          <CardBasicItem
            name={"[PM10] Particulate matter"}
            value={Math.round(current?.air_quality?.pm10)}
            unit={" µg/m³"}
          />
        </div>
      </div>
    </div>
  );
};
