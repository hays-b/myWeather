import React, { useState, useEffect } from 'react';
import { fetchQueryResults, fetchWeather } from '../../api';

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {

  const [result, setResult] = useState();
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdown, setDropdown] = useState(false);

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
        setDropdown
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;