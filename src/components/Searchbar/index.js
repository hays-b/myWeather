import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Button,
} from "react-native";

import React, { useEffect, useState } from "react";

import { fetchQueryResults, fetchWeather, fetchForecast } from "../../api";

import useAppContext from "../context/useAppContext";

const styles = require("./styles");

export default function Searchbar() {
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
  } = useAppContext();
  // const [result, setResult] = useState();
  // const [weather, setWeather] = useState();
  // const [searchTerm, setSearchTerm] = useState("");
  // const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const displayResults = async () => {
        const data = await fetchQueryResults(searchTerm);
        setResult(data);
      };
      displayResults();
      // Add timeout as well (maybe 2 seconds) with <ActivityIndicator size="small" color="#0000ff" />. Prevent constant API calls
    }
  }, [searchTerm]);

  const onPress = (location) => {
    setDropdown(false);
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
    // Add to search history
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Button
          style={styles.back}
          onPress={() => {
            setDropdown(false);
          }}
          title="<"
        />
        <TextInput
          style={styles.input}
          placeholder="London, Ohio, US"
          onChangeText={(text) => setSearchTerm(text)}
          onTouchStart={() => setDropdown(true)}
        />
      </View>
      {/* <Text>{searchTerm}</Text> */}
      {dropdown && Array.isArray(result)
        ? result.map((location) => (
            <TouchableHighlight
              style={styles.options}
              underlayColor="#D7D7D7"
              key={location.lat}
              onPress={() => onPress(location)}
            >
              <Text style={styles.text}>
                {location.name}, {location.state}, {location.country}
              </Text>
            </TouchableHighlight>
          ))
        : null}
    </View>
  );
}
