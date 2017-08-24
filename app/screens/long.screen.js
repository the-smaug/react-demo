import React, { Component } from "react";
import { View, Text } from "react-native";

import {
  Header,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: "Longs"
  };

  state = {
    inputText: ""
  };

  handleChangeText = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
          backgroundColor="red"
        />
        <View style={{ marginTop: 80 }}>
          <FormLabel>Name</FormLabel>
          {/* <FormInput
            value={this.state.inputText}
            onChangeText={e => this.handleChangeText(e)}
          /> */}
          <FormValidationMessage>Error message</FormValidationMessage>
        </View>
      </View>
    );
  }
}
