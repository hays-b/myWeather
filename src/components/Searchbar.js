import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Button,
} from "react-native";

import React, { useEffect, useState } from "react";

import { fetchQueryResults, fetchWeather } from "../api";

export default function Searchbar () {
const [result, setResult] = useState();
const [weather, setWeather] = useState();
const [searchTerm, setSearchTerm] = useState("");
const [dropdown, setDropdown] = useState(false);

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
  displayWeather();
};

// console.log("hello there", result);
// console.log("hello there", searchTerm);


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <Button
      style={styles.back}
  onPress={() => {
    setDropdown(false)
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
              <Text
              style={styles.text}>
                {location.name}, {location.state}, {location.country}
              </Text>
            </TouchableHighlight>
          ))
        : null}
      {weather ? (
        <Text>
          {weather.weather[0].description}, temp: {weather.main.temp}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    // borderWidth: 10,
    backgroundColor: '#999999',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
    marginRight: 10,
    // borderWidth: 1,
    padding: 10,
  },
  back: {
    borderWidth: 10,
    padding: 10,
    margin: 0,
    color: '#fff',
  },
    input: {
      color: '#fff',
      backgroundColor: '#353535',
      borderRadius: 15,
      flex: 1,
      // marginTop: 50,
      // margin: 20,
      borderWidth: 1,
      padding: 10,
    },
    options: {
      padding: 15,
      // backgroundColor: '#353535',
      // borderWidth: 5,
    },
    text: {
      color: '#FFFFFF',
    }
  });