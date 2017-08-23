import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import SideMenu from "react-native-side-menu";

import Home from "./views/home.view";
import Settings from "./views/settings.view";

// Layout
import Layout from "./layout";

class Menu extends React.Component {
  render() {
    return (
      <View>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
      </View>
    );
  }
}
export default () =>
  <NativeRouter>
    <SideMenu edgeHitWidth={150} hiddenMenuOffset={150} menu={<Menu />}>
      <Layout />
    </SideMenu>
  </NativeRouter>;
