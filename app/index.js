import React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { View, Text } from "react-native";

import Routes from "./routes";
import store, { history } from "./store";

export default () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>;
