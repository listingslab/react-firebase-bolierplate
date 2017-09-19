/**
 * React Firebase Bolierplate
 *
 * @package    react-firebase-bolierplate
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 */

import firebase from 'firebase';
import UAParser from 'ua-parser-js';

export function googleAuth () {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider).then(function(result) {
  }).catch(function(error) {
    console.log(error);
  });
}

export function logoutUser () {
  return firebase.auth().signOut()
}

export function updateClient (user) {
  const ua = new UAParser ();
  const d = new Date();
  const timestamp = d.getTime();
  const userInfo = {
    timestamp: timestamp,
    uid: user.uid || null,
    email: user.email || null,
    displayName: user.displayName || null,
    photoURL: user.photoURL || null,
    browserName: ua.getBrowser().name || null,
    browserMajorVersion: ua.getBrowser().major || null,
    browserFullVersion: ua.getBrowser().version || null,
    deviceVendor: ua.getDevice().vendor || null,
    deviceModel: ua.getDevice().model || null,
    engineName: ua.getEngine().name || null,
    OSName: ua.getOS().name || null,
    OSVersion: ua.getOS().version || null,
    CPUarchitecture: ua.getCPU().architecture || null
  }
  firebase.database().ref('clients/' + userInfo.uid).set(userInfo);
}
