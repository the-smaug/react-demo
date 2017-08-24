import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import { SideMenu, List, ListItem } from "react-native-elements";
import { StackNavigator } from "react-navigation";

import Home from "./views/home.view";
import Settings from "./views/settings.view";

// Layout
import Layout from "./layout";

export default class Routes extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  onSideMenuChange(isOpen: boolean) {
    this.setState({
      isOpen: isOpen
    });
  }

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const MenuComponent = (
      <View style={{ flex: 1, backgroundColor: "#ededed", paddingTop: 50 }}>
        <List containerStyle={{ marginBottom: 20 }}>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          {/* {list.map((l, i) =>
            <ListItem
              roundAvatar
              onPress={() => console.log("Pressed")}
              avatar={l.avatar_url}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          )} */}
        </List>
      </View>
    );

    return (
      <SideMenu
        isOpen={this.state.isOpen}
        onChange={this.onSideMenuChange.bind(this)}
        menu={MenuComponent}
      >
        <Layout toggleSideMenu={this.toggleSideMenu.bind(this)} />
      </SideMenu>
    );
  }
}
