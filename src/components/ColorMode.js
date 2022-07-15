import { useState } from "react";
import { useColorTheme } from "../hooks/useColorTheme";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const ColorMode = () => {
  const [colorTheme, setColorTheme] = useColorTheme();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const fireDarkMode = (e) => {
    setColorTheme(colorTheme);
    setDarkSide(e);
    console.log(e);
  };

  return (
    <DarkModeSwitch checked={darkSide} onChange={fireDarkMode} size={56} />
  );
};
