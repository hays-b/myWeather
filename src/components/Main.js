import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import React, { useEffect, useState } from "react";

import Searchbar from "./Searchbar"
import CurrentWeather from "./CurrentWeather"
import Footer from "./Footer"
// import Forecast from "./Forecast"

export default function Main() {
  return (
    <View style={styles.container}>
      <Searchbar />
      <CurrentWeather />
      {/* <Forecast /> */}
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      // alignItems: "center",
      // justifyContent: "center",
    },
  });
  