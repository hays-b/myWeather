import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
  },
  todayContainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
    height: 120,
    justifyContent: "space-evenly",
    padding: 10,
  },
  detailsContainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
    height: 120,
    justifyContent: "space-evenly",
    padding: 10,
  },
  forecastContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    overflow: 'hidden',
    height: 25,
  },
  scrollViewContainer: {
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    // left: 10,
    // right: 10,
    width: 350,
    height: 200,
    overflow: 'hidden',
    borderRadius: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

module.exports = styles;
