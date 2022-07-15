import { Search } from "./Search";

export const Header = ({ name, region, country, timezone }) => {
  return (
    <div className="flex w-full bg-header-day dark:bg-header-night bg-no-repeat h-60 bg-cover bg-bottom justify-around ">
      <div className="flex w-9/12 h-full items-center  justify-around">
        <div className="bg-black bg-opacity-20 shadow-xl rounded-xl p-5 text-dark-primary dark:text-light-tertiary">
          <div className="text-xl font-extrabold uppercase">{name}</div>
          <div>{region}</div>
          <div>{country}</div>
          <div>{timezone}</div>
        </div>
        <Search />
      </div>
    </div>
  );
};
