import React, { Component } from "react";
import { View, Button } from "react-native";
import { Audio } from "expo";

export default class Music extends Component {
  state = {
    audio: new Audio.Sound({
      source: `../assets/sounds/${this.props.duration}/${this.props.sound}.mp3`
    })
  };

  async componentDidMount() {
    await this.state.audio.loadAsync();
  }

  playMusic = async () => {
    try {
      await this.state.audio.playAsync();
    } catch (error) {
      console.log("erreur plahyMusic", error);
    }
  };

  render() {
    const { title, picture } = this.props;
    console.log(this.state.audio);
    return (
      <Button
        onPress={this.playMusic}
        title={title}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}
