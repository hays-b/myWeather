import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      // position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      // borderWidth: 10,
      backgroundColor: '#999999',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 50,
      marginRight: 10,
      // borderWidth: 1,
      padding: 10,
    },
    back: {
      borderWidth: 10,
      padding: 10,
      margin: 0,
      color: '#fff',
    },
      input: {
        color: '#fff',
        backgroundColor: '#353535',
        borderRadius: 15,
        flex: 1,
        // marginTop: 50,
        // margin: 20,
        borderWidth: 1,
        padding: 10,
      },
      options: {
        padding: 15,
        // backgroundColor: '#353535',
        // borderWidth: 5,
      },
      text: {
        color: '#FFFFFF',
      }
    });

    module.exports = styles