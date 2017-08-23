import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

export default () =>
  <View style={styles.item}>
    <Link to="/" underlayColor="#f0f4f7">
      <Text style={styles.link}>Accueil</Text>
    </Link>
    <Link to="/settings" underlayColor="#f0f4f7">
      <Text style={styles.link}>Settings</Text>
    </Link>
  </View>;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "black"
  },
  link: {
    color: "white"
  }
});
