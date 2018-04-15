import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAgpXsGkiJc3hYsPyFIykpLdo6fAjk9PCE",
  authDomain: "mc-box.firebaseapp.com",
  databaseURL: "https://mc-box.firebaseio.com",
  projectId: "mc-box",
  storageBucket: "mc-box.appspot.com",
  messagingSenderId: "413433598685"
};
firebase.initializeApp(config);

export const storage = firebase.storage();

export default firebase;
