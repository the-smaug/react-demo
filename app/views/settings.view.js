import React from "react";
import { View, Text } from "react-native";
import ProfilePicture from "./settings/profilePicture.component";

export default () =>
  <View style={{ backgroundColor: "purple" }}>
    <Text>Paramètres</Text>
    <ProfilePicture />
  </View>;
