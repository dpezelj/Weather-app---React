const weatherApiLogo =
  "https://cdn.weatherapi.com/v4/images/weatherapi_logo.png";

const FooterBar = () => {
  return (
    <footer className="flex flex-row w-full  bg-light_primary dark:bg-dark_primary text-dark_primary dark:text-light_primary transition duration-2 items-center justify-between fixed p-3 bottom-0 h-16">
      <div className="text-sm">Copyright @ WeatherApp 2022</div>
      <div className="flex flex-row ml-3 items-center">
        <div className="text-sm mr-3">powered by</div>
        <img src={weatherApiLogo} className="mr-3 h-8" alt="" />
      </div>
    </footer>
  );
};

export { FooterBar };
