import { useState, useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

export const Search = ({ isDay }) => {
  const [search, setSearch] = useState("");
  const { value, setContextValue } = useContext(LocationContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    setContextValue({ searchValue: search });
    console.log(value);
  };

  let textColor = isDay === 1 ? "text-[#202225]" : "text-slate-300";
  let borderColor = isDay === 1 ? "border-[#202225]" : "border-slate-300";
  let placeHolder =
    isDay === 1 ? "placeholder-[#202225]" : "placeholder-slate-300";
  const searchAttr = [
    "bg-black",
    "bg-opacity-20",
    "shadow-xl",
    "rounded-xl",
    "p-3",
    textColor,
  ];
  const inputAttr = [
    "bg-transparent",
    "mr-2",
    "focus:outline-none",
    "border-b-2",
    placeHolder,
    borderColor,
  ];
  return (
    <div className={searchAttr.join(" ")}>
      <input
        className={inputAttr.join(" ")}
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Unesi lokaciju"
      ></input>
      <button onClick={handleClick}>
        <svg
          className="h-5 w-5 text-light-tertiary items-center mt-2"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
    </div>
  );
};
