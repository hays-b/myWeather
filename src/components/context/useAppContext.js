import { useContext } from 'react';
import { AppContext } from './AppContext';

const useAppContext = () => {
  const {
    result,
    setResult,
    weather,
    setWeather,
    searchTerm,
    setSearchTerm,
    dropdown,
    setDropdown
  } = useContext(AppContext);

  return {
    result,
    setResult,
    weather,
    setWeather,
    searchTerm,
    setSearchTerm,
    dropdown,
    setDropdown
  };
};

export default useAppContext;
