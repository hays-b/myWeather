import { useContext } from 'react';
import { AppContext } from './AppContext';

const useAppContext = () => {
  const {
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
    setLocation
  } = useContext(AppContext);

  return {
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
    setLocation
  };
};

export default useAppContext;
