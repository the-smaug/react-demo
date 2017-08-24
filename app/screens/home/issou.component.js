import React, { Component } from "react";
import { Image, View } from "react-native";

export default class Issou extends Component {
  render() {
    let images = [];
    for (let i = 0; i < 50; i++) {
      images.push(i);
    }
    return (
      <View>
        {images.map((item, key) => {
          return (
            <Image
              key={item}
              style={{
                width: 150,
                height: 150
              }}
              source={require("../../assets/img/avatar.png")}
            />
          );
        })}
      </View>
    );
  }
}
