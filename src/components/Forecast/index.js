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
  
  export default function Forecast() {
    const { forecast } = useAppContext();

    const placeholder = forecast?.list[0]
  
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
        {forecast ? (
          <>
            <Text>
              Forecast: {placeholder.main.temp}F
            </Text>
          </>
        ) : null}
      </View>
    );
  }
  