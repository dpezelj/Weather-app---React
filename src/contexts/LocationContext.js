import { createContext, useState } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [value, setContextValue] = useState({});

  return (
    <LocationContext.Provider value={{ value, setContextValue }}>
      {children}
    </LocationContext.Provider>
  );
};
