import { Icon } from "@iconify/react";
import { CardBasicItem } from "./CardBasicItem";

export const WindInfo = ({ windSpeed, windDir, windGust, windDegree }) => {
  const direction = {
    N: "North",
    NNE: "North-Northeast",
    NE: "Northeast",
    ENE: "East-Northeast",
    E: "East",
    ESE: "East-Southeast",
    SE: "Southeast",
    SSE: "South-Southeast",
    S: "South",
    SSW: "South-Southwest",
    SW: "Southwest",
    WSW: "West-Southwest",
    W: "West",
    WNW: "West-Northwest",
    NW: "Northwest",
    NNW: "North-Northwest",
  };

  return (
    <div className="items-center justify-center flex">
      <div className="flex w-9/12 h-auto bg-light_secondary dark:bg-dark_tertiary shadow-xl rounded-xl mt-5 justify-around p-5">
        <div className="flex w-11/12 h-2/3 bg-light_tertiary dark:bg-dark_secondary shadow-xl rounded-xl m-3 p-3 flex-col">
          <div className="w-full font-extrabold text-center pb-2 border-b-2 border-dark_primary tracking-wider">
            WIND INFORMATION
          </div>
          <div className="flex justify-between pt-5 px-5 pb-3">
            <div>
              <Icon
                icon="akar-icons:arrow-up"
                width="150"
                style={{ transform: `rotate(${windDegree}deg)` }}
              />
            </div>
            <div className="w-1/2 pt-2">
              <CardBasicItem
                name={"Wind direction"}
                value={direction[windDir]}
                unit={""}
              />
              <CardBasicItem
                name={"Wind speed"}
                value={windSpeed}
                unit={" km/h"}
              />
              <CardBasicItem
                name={"Wind gust"}
                value={windGust}
                unit={" km/h"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
