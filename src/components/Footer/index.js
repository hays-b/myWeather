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
  
  export default function Footer() {
    // const { forecast } = useAppContext();
  
    return (
      <View style={styles.footer}>
          <>
            <Text>Footer</Text>
          </>
      </View>
    );
  }