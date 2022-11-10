import {BASE_URL, API_KEY} from "@env"

const baseURL = BASE_URL;
const apiKey = API_KEY;

// API key is stored as an environment variable but this is not entirely secure once deployed.
// More secure options would be building out a small server,
// or using a 3rd-party service -- Firebase storage(?)

export async function fetchQueryResults(
    cityName
    // stateCode,
    // countryCode,
  ) {
    // const [cityName, countryName, StateName] = searchTerm.split(",", 3);
    // const url = `${baseURL}/geo/1.0/direct?q=${cityName, ',' || ''} ${stateCode , ',' || ''} ${countryCode || ''}&limit=5&appid=${apiKey}`;
    const url = `${baseURL}/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      // console.log("cities", data)
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchWeather(
  lat,
  lon
) {
  const url = `${baseURL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

try {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data)

  return data;
} catch (error) {
  throw error;
}
}


export async function fetchForecast(
  lat,
  lon
) {
  const url = `${baseURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

try {
  const response = await fetch(url);
  const data = await response.json();

  // console.log(data)

  return data;
} catch (error) {
  throw error;
}
}