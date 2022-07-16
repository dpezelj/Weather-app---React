import { Search } from "./Search";
import dayBg from "../assets/bg/day.mov";
import nightBg from "../assets/bg/night.mov";

export const Header = ({ name, region, country, timezone, isDay }) => {
  console.log("is day: " + isDay);
  let bg = isDay == 1 ? dayBg : nightBg;
  let textColor = isDay == 1 ? "text-[#202225]" : "text-slate-300";

  const headerAttr = [
    "bg-black",
    "bg-opacity-20",
    "shadow-xl",
    "rounded-xl",
    "p-5",

    textColor,
  ];
  return (
    <div className="flex w-full  h-60  justify-around ">
      <video
        src={bg}
        autoPlay
        loop
        muted
        className="flex w-full h-full object-cover relative"
      />
      <div className="flex w-9/12 h-auto justify-around absolute items-center mt-12">
        <div className={headerAttr.join(" ")}>
          <div className="text-xl font-extrabold uppercase">{name}</div>
          <div>{region}</div>
          <div>{country}</div>
          <div>{timezone}</div>
        </div>
        <Search isDay={isDay} />
      </div>
    </div>
  );
};
