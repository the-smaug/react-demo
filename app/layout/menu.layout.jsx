import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

export default () =>
  <View>
    <Link to="/home" style={styles.subNavItem} underlayColor="#f0f4f7">
      <Text>Accueil</Text>
    </Link>
    <Link to="/settings" style={styles.subNavItem} underlayColor="#f0f4f7">
      <Text>Settings</Text>
    </Link>
  </View>;
