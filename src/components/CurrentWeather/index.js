import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Button,
  FlatList,
  ScrollView,
} from "react-native";

import React, { useEffect, useState } from "react";

import Forecast from "../Forecast";

import useAppContext from "../context/useAppContext";

const styles = require("./styles");

export default function CurrentWeather() {
  const { weather, forecast } = useAppContext();

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
          <View style={styles.scrollViewContainer}>
          <ScrollView style={styles.forecastContainer} horizontal={true}>
            {forecast
              ? forecast.list.map((snippet) => (
                  <Forecast key={snippet.dt} snippet={snippet} />
                ))
              : null}
          </ScrollView>
          </View>
          {/* {forecast ?
          <FlatList
            // horizontal="true"
            data={forecast.list}
            // keyExtractor={(snippet, index) => index.toString()}
            renderItem={({snippet}) => (
              <Forecast snippet={snippet}/>
              // <Text>{snippet}</Text>
            )}
          />
          : null} */}
        </>
      ) : null}
    </View>
  );
}
