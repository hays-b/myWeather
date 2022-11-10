import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Button,
  FlatList,
  ScrollView,
  Image,
} from "react-native";

import React, { useEffect, useState } from "react";

import Forecast from "../Forecast";

import useAppContext from "../context/useAppContext";

const styles = require("./styles");

export default function CurrentWeather() {
  const { weather, forecast } = useAppContext();

  //   "base": "stations",
  //   "clouds": Object {
  //     "all": 0,
  //   },
  //   "cod": 200,
  //   "coord": Object {
  //     "lat": 29.976,
  //     "lon": -90.0782,
  //   },
  //   "dt": 1667971765,
  //   "id": 4335045,
  //   "main": Object {
  //     "feels_like": 295.96,
  //     "humidity": 78,
  //     "pressure": 1022,
  //     "temp": 295.62,
  //     "temp_max": 297.15,
  //     "temp_min": 293.72,
  //   },
  //   "name": "New Orleans",
  //   "sys": Object {
  //     "country": "US",
  //     "id": 2008292,
  //     "sunrise": 1667909982,
  //     "sunset": 1667948909,
  //     "type": 2,
  //   },
  //   "timezone": -21600,
  //   "visibility": 10000,
  //   "weather": Array [
  //     Object {
  //       "description": "clear sky",
  //       "icon": "01n",
  //       "id": 800,
  //       "main": "Clear",
  //     },
  //   ],
  //   "wind": Object {
  //     "deg": 10,
  //     "speed": 2.57,
  //   },
  // }


  return (
    <View style={styles.container}>
      {weather ? (
        <>
          <View style={styles.todayContainer}>
            <Text>
              {weather.name}, {weather.sys.country}
            </Text>
            <Text>
              {weather.weather[0].description}, temp: {weather.main.temp}F
            </Text>
            <Text>feels like: {weather.main.feels_like}F</Text>
            <Image
              style={styles.logo}
              source={{
                uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
              }}
            ></Image>
          </View>
          <View style={styles.detailsContainer}>
            <Text>Humidity: {weather.main.humidity}%</Text>
            <Text>Wind: {weather.wind.speed}mph</Text>
            <Text>Visibility: {weather.visibility}m</Text>
            <Text>Max temp: {weather.main.temp_max}</Text>
            <Text>Min temp: {weather.main.temp_min}</Text>
          </View>
          <View style={styles.scrollViewContainer}>
            <ScrollView style={styles.forecastContainer} horizontal={true}>
              {forecast
                ? forecast.list.map((snippet) => (
                    <Forecast key={snippet.dt} snippet={snippet} />
                  ))
                : null}
            </ScrollView>
          </View>
        </>
      ) : null}
    </View>
  );
}
