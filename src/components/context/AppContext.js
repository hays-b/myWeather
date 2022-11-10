import React, { useState, useEffect } from "react";
import {
  fetchQueryResults,
  fetchWeather,
  fetchForecast,
  fetchRadar,
} from "../../api";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [result, setResult] = useState();
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [searchTerm, setSearchTerm] = useState("New Orleans");
  const [dropdown, setDropdown] = useState(false);
  const [location, setLocation] = useState({
    lat: 29.9759983,
    lon: -90.0782127,
  });

  useEffect(() => {
    const displayWeather = async () => {
      const data = await fetchWeather(location.lat, location.lon);
      setWeather(data);
    };
    const displayForecast = async () => {
      const data = await fetchForecast(location.lat, location.lon);
      setForecast(data);
    };

    displayWeather();
    displayForecast();
  }, [location]);

  return (
    <AppContext.Provider
      value={{
        result,
        setResult,
        weather,
        setWeather,
        forecast,
        setForecast,
        searchTerm,
        setSearchTerm,
        dropdown,
        setDropdown,
        location,
        setLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
