import React, { Component } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { Audio } from "expo";

// Component
import Item from "../components/item.component";

// Data
import { short } from "../mapper.json";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Courts"
  };

  state = {
    sounds: []
  };

  // async componentDidMount() {
  //   console.log("mountig");
  //   const sounds = short.map(async item => {
  //     const sound = new Audio.Sound();
  //     try {
  //       const mp3 = require(`../assets/sounds/short/${item.sound}.mp3`);
  //       const loaded = await sound.loadAsync(mp3);
  //       console.log("loaded", loaded);
  //       return loaded;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   });
  //   // console.log(sounds);
  //   this.setState({ sounds });
  // }

  // playMusic = async () => {
  //   const mp3 = require(`../assets/sounds/short/hein.mp3`);
  //   try {
  //     if (this.state.audio._loaded) {
  //       console.log("oui");
  //       await this.state.audio.playAsync();
  //     } else {
  //       console.log("non");
  //       await this.state.audio.loadAsync(mp3);
  //       await this.state.audio.playAsync();
  //     }
  //     console.log();
  //   } catch (error) {
  //     console.log("erreur plahMusic", error);
  //   }
  // };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Issou home</Text>
        {short.map((item, key) =>
          <View key={key} style={{ marginTop: 5 }}>
            <Item duration="short" {...item} />
          </View>
        )}
        {/* <Button
          onPress={this.playMusic}
          title="foo"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}
      </View>
    );
  }
}
