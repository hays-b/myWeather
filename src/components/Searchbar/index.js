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
    setLocation,
  } = useAppContext();

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

  const onPress = (resultLocation) => {
    setDropdown(false);
    setLocation({lat: resultLocation.lat, lon: resultLocation.lon});
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
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
          onTouchStart={() => setDropdown(true)}
          placeholder="New Orleans, Louisiana, US"
          placeholderTextColor="#7A7A7A" 
        />
      </View>
      {/* <Text>{searchTerm}</Text> */}
      {dropdown && Array.isArray(result)
        ? result.map((resultLocation) => (
            <TouchableHighlight
              style={styles.options}
              underlayColor="#D7D7D7"
              key={resultLocation.lat}
              onPress={() => onPress(resultLocation)}
            >
              <Text style={styles.text}>
                {resultLocation.name}, {resultLocation.state}, {resultLocation.country}
              </Text>
            </TouchableHighlight>
          ))
        : null}
    </View>
  );
}
