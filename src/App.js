import React, { Component } from "react";

import ListItem from "./components/ListItem";
// import { loadFile } from "./api/StorageApi";
import { storage } from "./config/firebase";
import files from "./config/files";

class App extends Component {
  state = {
    items: [],
    playingItem: null,
    refs: []
  };

  constructor() {
    super();
    this.sounds = {};

    files.forEach((_, key) => {
      this.sounds[key] = React.createRef();
    });
  }

  async componentDidMount() {
    const soundsUrl = await Promise.all(
      files.map(async ({ sound, title }) => {
        const soundsRef = storage.ref(sound);
        const soundUrl = await soundsRef.getDownloadURL();
        return { soundUrl, title };
      })
    );

    console.log(soundsUrl);

    this.setState({
      items: soundsUrl
    });
  }

  playSound = soundKey => {
    this.sounds[soundKey].current.play();
  };

  endPlay = () => {
    this.setState({
      playingItem: null
    });
  };

  render() {
    return (
      <ul>
        {this.state.items.map(({ title, soundUrl }, key) => {
          console.log(soundUrl);
          return (
            <ListItem key={key}>
              <button
                onClick={() => {
                  this.playSound(key);
                }}
              >
                {title}
              </button>
              <audio ref={this.sounds[key]} src={soundUrl}>
                Votre navigateur ne supporte pas l'élément <code>audio</code>.
              </audio>
            </ListItem>
          );
        })}
      </ul>
    );
  }
}

export default App;
