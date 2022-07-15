import { Content } from "./components";

import { Home, Astronomy, Forecast, Timezones, Info } from "./pages";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LocationProvider } from "./contexts/LocationContext";

function App() {
  return (
    <LocationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />}>
            <Route path="/home" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/astronomy" element={<Astronomy />} />
            <Route path="/timezones" element={<Timezones />} />
            <Route path="/info" element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;
