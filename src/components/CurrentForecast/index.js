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

export default function CurrentForecast() {
  const { weather } = useAppContext();

  // const convertKtoF = (temp) => {
  //         +((1.8 * (temp - 273)) + 32).toFixed(2);
  // }

  function floatingPointFix(temp) {
    return +temp.toFixed(2);
    // This functions simply rounds to the 2nd decimal.
    // The reason for this: additions and subtractions of decimal numbers can result in incorrect answers in JavaScript, eg. 2.2 + 2.1 = 4.300000000000001
  }

  const fahrenheitTemp = floatingPointFix(
    (weather?.main.temp - 273.15) * 1.8 + 32
  );

  const celsiusTemp = floatingPointFix(weather?.main.temp - 273.15);

  return (
    <View style={styles.container}>
      {weather ? (
        <>
          <Text>
          {weather.weather[0].description}, temp: {fahrenheitTemp}F
        </Text>
          <Text>temp: {celsiusTemp}C</Text>
        </>
      ) : null}
    </View>
  );
}
