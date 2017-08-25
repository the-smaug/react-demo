import React, { Component } from "react";
import { Text, View, Button, TouchableHighlight } from "react-native";
import { Audio } from "expo";
import { Avatar } from "react-native-elements";

export default class Item extends Component {
  state = {
    audio: new Audio.Sound()
  };

  async componentDidMount() {}

  playMusic = async () => {
    const { sound } = this.props;
    try {
      await this.state.audio.loadAsync(sound);
      await this.state.audio.playAsync();
    } catch (error) {
      console.error("music", sound);
    }
  };

  render() {
    const { title, picture } = this.props;
    return (
      <View>
        <Avatar
          xlarge
          rounded
          source={require("../img/avatar.png")}
          onPress={this.playMusic}
          activeOpacity={0.7}
        />
        <Text>
          {title}
        </Text>
      </View>
    );
  }
}
