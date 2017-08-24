import React, { Component } from "react";
import { View, Button } from "react-native";
import { Audio } from "expo";

export default class Item extends Component {
  // async componentDidMount() {
  //   const { duration, sound } = this.props;
  //   const mp3 = require(`../sounds/${duration}/${sound}.mp3`);
  //   console.log(mp3);
  //   try {
  //     await this.state.audio.loadAsync(mp3);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  componentDidCatch(error, info) {
    console.log("###", error, info);
  }

  playMusic = async () => {
    const { duration, sound } = this.props;
    const mp3 = require(`../sounds/${duration}/${sound}.mp3`);

    try {
      const audio = new Audio.Sound();
      await audio.loadAsync(mp3);
      await audio.playAsync();
    } catch (error) {
      console.error("music", mp3);
    }
  };

  render() {
    const { title, picture } = this.props;
    return (
      <Button
        onPress={() => this.playMusic()}
        title="foo"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}
