import { useState, useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

export const Search = () => {
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

  return (
    <div className="bg-black bg-opacity-20 shadow-xl rounded-xl p-3 text-dark_primary dark:text-light_tertiary">
      <input
        className="mr-2 bg-transparent focus:outline-none border-b-2 border-dark_primary dark:border-light_tertiary"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Unesi lokaciju"
      ></input>
      <button onClick={handleClick}>
        <svg
          class="h-5 w-5 text-light-tertiary items-center mt-2"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <circle cx="10" cy="10" r="7" />{" "}
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
    </div>
  );
};
