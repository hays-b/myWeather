import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  forecastContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    overflow: 'hidden',
    height: 20,
  },
  scrollViewContainer: {
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    // left: 10,
    // right: 10,
    width: 350,
    height: 70,
    overflow: 'hidden',
  },
});

module.exports = styles;
