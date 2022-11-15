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

export default function Forecast({snippet}) {
  // const { forecast } = useAppContext();

//   const snippet = forecast?.list[0];

// console.log("in Forecast", snippet)

  const date = new Date(snippet?.dt_txt.replace(" ", "T"));
  const today = new Date()

  const isItToday = (date.getDay() === today.getDay()) ? true: false


  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function formatTime() {
    let hrs = date.getHours();
    let AMPM = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    let result = hrs + AMPM;
    return result;
 }

  //     Object {
  //       "clouds": Object {
  //         "all": 0,
  //       },
  //       "dt": 1667433600,
  //       "dt_txt": "2022-11-03 00:00:00",
  //       "main": Object {
  //         "feels_like": 72.52,
  //         "grnd_level": 1019,
  //         "humidity": 67,
  //         "pressure": 1021,
  //         "sea_level": 1021,
  //         "temp": 72.43,
  //         "temp_kf": 0.11,
  //         "temp_max": 72.43,
  //         "temp_min": 72.23,
  //       },
  //       "pop": 0,
  //       "sys": Object {
  //         "pod": "n",
  //       },
  //       "visibility": 10000,
  //       "weather": Array [
  //         Object {
  //           "description": "clear sky",
  //           "icon": "01n",
  //           "id": 800,
  //           "main": "Clear",
  //         },
  //       ],
  //       "wind": Object {
  //         "deg": 84,
  //         "gust": 6.71,
  //         "speed": 4.27,
  //       },
  //     },

  return (
    <View style={styles.container}>
      {/* {forecast ? ( */}
        <>
          <Text>{isItToday ? 'Today' : week[date.getDay()]}</Text>
          <Text>{formatTime()}</Text>
          <Text>{snippet.main.temp}&#8457;</Text>
          <Text>{snippet.weather[0].description}</Text>
          <Text>{(snippet.pop * 100).toFixed()}%</Text>
        </>
      {/* ) : null} */}
    </View>
  );
}
