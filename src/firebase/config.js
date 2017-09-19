import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD94wfr886KSDKQSL18U0S58_L-SzMeIbc",
  authDomain: "react-firebase-bolierpla-74356.firebaseapp.com",
  databaseURL: "https://react-firebase-bolierpla-74356.firebaseio.com",
  projectId: "react-firebase-bolierpla-74356"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref();
export const db = firebase.database();
export const firebaseAuth = firebase.auth;