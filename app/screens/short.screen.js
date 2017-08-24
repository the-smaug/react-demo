import React, { Component } from "react";
import { View, Text, ScrollView, Button } from "react-native";

// Component
import Item from "../components/item.component";

// Data
import { short } from "../mapper.json";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Courts"
  };

  render() {
    console.log(short);
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Issou home</Text>
        {short.map((item, key) =>
          <Item key={key} duration="short" {...item} />
        )}
      </View>
    );
  }
}
