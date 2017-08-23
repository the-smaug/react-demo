import React from "react";
import { View } from "react-native";
import { NativeRouter, Route } from "react-router-native";

import Home from "./views/home.view";
import Settings from "./views/settings.view";

// Layout
import Menu from "./layout/menu.layout";

export default () =>
  <NativeRouter>
    <View>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
    </View>
  </NativeRouter>;
