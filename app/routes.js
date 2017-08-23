import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";

import Home from "./views/home.view";
import Settings from "./views/settings.view";

// Layout
import Menu from "./layout/menu.layout";

export default () =>
  <NativeRouter>
    <View style={styles.menu}>
      <Menu />

      <View style={styles.container}>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
      </View>
    </View>
  </NativeRouter>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  menu: {
    marginTop: "15px"
  }
});
