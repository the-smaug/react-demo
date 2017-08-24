import React from "react";
import { AppRegistry, Text, Button, View } from "react-native";
import { TabNavigator } from "react-navigation";

// Screens
import HomeScreen from "./screens/home.screen";
import SettingsScreen from "./screens/settings.screen";

const SimpleApp = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    tabBarPosition: "bottom"
  }
);

export default SimpleApp;
