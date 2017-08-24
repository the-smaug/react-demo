import React from "react";
import { AppRegistry, Text, Button, View } from "react-native";
import { TabNavigator } from "react-navigation";

// Screens
import ShortScreen from "./screens/short.screen";
import LongScreen from "./screens/long.screen";

const SimpleApp = TabNavigator(
  {
    Short: { screen: ShortScreen },
    Long: { screen: LongScreen }
  },
  {
    tabBarPosition: "bottom"
  }
);

export default SimpleApp;
