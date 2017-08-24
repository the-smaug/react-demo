import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: "Longs"
  };

  render() {
    return (
      <View>
        <Text>Paramètres</Text>
      </View>
    );
  }
}
