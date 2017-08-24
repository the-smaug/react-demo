import React, { Component } from "react";
import { Image, View, TouchableHighlight } from "react-native";
import { ImagePicker } from "expo";

export default class ProfilePicture extends Component {
  state = {
    picture: ""
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ picture: result.uri });
    }
  };

  render() {
    const { picture } = this.state;
    const pictureUri =
      picture !== ""
        ? picture
        : "http://www.fantasynetwork.com/wp-content/uploads/2015/11/img_placeholder_avatar.jpg";
    return (
      <View>
        <TouchableHighlight onPress={() => this.pickImage()}>
          <Image style={styles.profilePicture} source={{ uri: pictureUri }} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  profilePicture: {
    width: 125,
    height: 125,
    borderRadius: 20
  }
};
