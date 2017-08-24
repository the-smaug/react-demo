// import React, { Component } from "react";
// import { View, Button } from "react-native";
// import { Audio } from "expo";

// export default class Music extends Component {
//   state = {
//     soundObject: new Audio.Sound(),
//     song: require("../../assets/sounds/galway-girl.mp3"),
//     isPlaying: false
//   };

//   playMusic = async () => {
//     if (!this.state.isPlaying) {
//       try {
//         await this.state.soundObject.loadAsync(this.state.song);
//         await this.state.soundObject.playAsync();
//         console.log(this.state.soundObject, "oui");
//         this.setState({
//           isPlaying: true
//         });
//         // Your sound is playing!
//       } catch (error) {
//         await this.state.soundObject.playAsync();
//         console.log(error, "non");
//       }
//     }
//   };

//   stopMusic = async () => {
//     this.state.soundObject.stopAsync();
//     this.setState({
//       isPlaying: false
//     });
//   };

//   render() {
//     return (
//       <View>
//         <Button
//           onPress={this.playMusic}
//           title="Learn More"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//         <Button
//           onPress={this.stopMusic}
//           title="Stop music"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//     );
//   }
// }
