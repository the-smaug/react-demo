import React, { Component } from "react";
import { View, Text, ScrollView, Button } from "react-native";

import Map from "./home/map.component";
import Music from "./home/music.component";
import Camera from "./home/camera.component";
import Issou from "./home/issou.component";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Issou home</Text>
        <Button onPress={() => navigate("Settings")} title="Paramètres" />
        <Music />
        {/* <Camera /> */}
        <ScrollView>
          <Issou />
        </ScrollView>
      </View>
    );
  }
}
