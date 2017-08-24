import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyApp from "./app/index";
import App2 from "./app/app2";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <MyApp /> */}
        <App2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 25
  }
});
