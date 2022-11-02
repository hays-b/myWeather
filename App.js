import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";

import React from "react";

import { Searchbar } from "./src/components";

export default function App() {
  return (
    <View style={styles.container}>
      <Searchbar />
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
