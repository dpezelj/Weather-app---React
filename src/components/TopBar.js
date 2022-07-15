import logoImage from "../assets/img/weather.png";
import { Link } from "react-router-dom";

const TopBar = () => {
  const menuItems = ["Home", "Forecast", "Astronomy", "Timezones", "Info"];

  return (
    <div className="flex w-full bg-light_primary dark:bg-dark_primary text-dark_primary dark:text-light_primary transition duration-2 justify-between flex-row items-center p-3 fixed h-16 z-50">
      <img className="w-11 items-center" src={logoImage}></img>

      <ul className="flex flex-row ">
        {menuItems.map((el) => (
          <Link key={el} to={`${el.toLowerCase()}`}>
            <li className="mx-2">{el}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export { TopBar };
