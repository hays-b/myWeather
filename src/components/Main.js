import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import React, { useEffect, useState } from "react";

import AppContextProvider from './context/AppContext';

import Searchbar from "./Searchbar"
import CurrentForecast from "./CurrentForecast"

export default function Main() {
  return (
    <View style={styles.container}>
        <AppContextProvider>
      <Searchbar />
      <CurrentForecast />
      <StatusBar style="auto" />
      </AppContextProvider>
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
  