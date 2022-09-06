
import { CardBasicItem } from "./CardBasicItem";

export const AstronomyInfo = (data) => {
console.log(data)
    return (
        <div className="items-center justify-center flex">
      <div className="flex w-9/12 h-auto bg-light_secondary dark:bg-dark_tertiary shadow-xl rounded-xl mt-5 justify-around p-5">
        <div className="flex w-1/2 h-2/3 bg-light_tertiary dark:bg-dark_secondary shadow-xl rounded-xl m-3 p-3 flex-col">
          <div className="w-full font-extrabold text-center pb-2 border-b-2 border-dark_primary tracking-wider">
            ASTRONOMY INFO
          </div>
          <CardBasicItem
            name={"Moon phase"}
            value={data?.data.moon_phase}
            unit={""}
          />
          <CardBasicItem
            name={"Moon illumination"}
            value={data?.data.moon_illumination}
            unit={" %"}
          />
          <CardBasicItem
            name={"Moonrise"}
            value={data?.data.moonrise}
            unit={""}
          />
          
        </div>
        <div className="flex w-1/2 h-2/3 bg-light_tertiary dark:bg-dark_secondary shadow-xl rounded-xl m-3 p-3 flex-col">
          <div className="w-full font-extrabold text-center pb-2 border-b-2 border-dark_primary tracking-wider">
          ASTRONOMY INFO
          </div>
          <CardBasicItem
            name={"Moonset"}
            value={data?.data.moonset}
            unit={""}
          />
          <CardBasicItem
            name={"Sunrise"}
            value={data?.data.sunrise}
            unit={""}
          />
          <CardBasicItem
            name={"Sunset"}
            value={data?.data.sunset}
            unit={""}
          />
          
        </div>
      </div>
    </div>
    )
}