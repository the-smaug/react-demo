import React, { Component } from "react";
import { View, Text, ScrollView, Button } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Courts"
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Issou home</Text>
      </View>
    );
  }
}
