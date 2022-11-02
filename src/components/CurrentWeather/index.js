import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Button,
} from "react-native";

import React, { useEffect, useState } from "react";

import useAppContext from "../context/useAppContext";

const styles = require("./styles");

export default function CurrentWeather() {
  const { weather, forecast } = useAppContext();

  console.log(forecast)

//   function floatingPointFix(convertedTemp) {
//     return +convertedTemp.toFixed(2);
//     // This functions simply rounds to the 2nd decimal.
//     // The reason for this: additions and subtractions of decimal numbers can result in incorrect answers in JavaScript, eg. 2.2 + 2.1 = 4.300000000000001
//   }

//   function convertToF (temp) {
//     return floatingPointFix((temp - 273.15) * 1.8 + 32);
//   }

// function convertToC (temp) {
//     return floatingPointFix(weather?.main.temp - 273.15);
// }

  return (
    <View style={styles.container}>
      {weather ? (
        <>
          <Text>
            {weather.weather[0].description}, temp: {weather.main.temp}F
          </Text>
          <Text>feels like: {weather.main.feels_like}F</Text>
        </>
      ) : null}
    </View>
  );
}
