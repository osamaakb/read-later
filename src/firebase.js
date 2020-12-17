import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNGYwp9XI5C2jbsYZjOJc3ydVN-2g3vjI",
  authDomain: "readlater-708be.firebaseapp.com",
  databaseURL: "https://readlater-708be.firebaseio.com",
  projectId: "readlater-708be",
  storageBucket: "readlater-708be.appspot.com",
  messagingSenderId: "264923569873",
  appId: "1:264923569873:web:dbf0fb4f38757115d52ff0",
  measurementId: "G-Z7YC9XXFKE"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
export { db };
export default firebase;
