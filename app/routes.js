import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";

import Home from "./views/home.view";
import Settings from "./views/settings.view";

const App = () =>
  <NativeRouter>
    <Route exact path="/" component={Home} />
    <Route path="/settings" component={Settings} />
  </NativeRouter>;
