import React, { Component } from "react";
import { View, Text, ScrollView, Button } from "react-native";

// Component
import Item from "../components/item.component";

// Data
import mapper from "../mapper";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Courts"
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <View style={{ flex: 0.5, flexDirection: "row", flexWrap: "wrap" }}>
          {mapper.short.map((item, key) =>
            <View key={key} style={{ marginTop: 0, width: "50%" }}>
              <Item {...item} />
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}
