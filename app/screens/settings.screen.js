import React, { Component } from "react";
import { View, Text } from "react-native";
import ProfilePicture from "./settings/profilePicture.component";

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: "Paramètres"
  };

  render() {
    return (
      <View>
        <Text>Paramètres</Text>
        <ProfilePicture />
      </View>
    );
  }
}
