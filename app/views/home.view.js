import React from "react";
import { View, Text, ScrollView } from "react-native";

import Map from "./home/map.component";
import Music from "./home/music.component";
import Camera from "./home/camera.component";
import Issou from "./home/issou.component";

export default () =>
  <View>
    <Text>Issou home</Text>
    {/* <Music /> */}
    {/* <Camera /> */}
    <ScrollView>
      <Issou />
    </ScrollView>
  </View>;
