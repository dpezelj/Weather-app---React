import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { TopBar } from "./TopBar";
import { FooterBar } from "./FooterBar";
import { CityName } from "./CityName";
import { Error } from "./Error";

import { LocationContext } from "../contexts/LocationContext";
import { ColorMode } from "./ColorMode";

const Content = () => {
  const { value } = useContext(LocationContext);

  return (
    <div className="">
      <TopBar />

      <div className="py-16 bg-light_tertiary dark:bg-dark_secondary text-dark_primary dark:text-light_primary transition duration-2 min-h-screen ">
        <Outlet />
        {value?.error ? <Error /> : <CityName name={value?.location?.name} />}
        <ColorMode />
      </div>
      <FooterBar />
    </div>
  );
};

export { Content };
