import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-P8GGQ-DEGkp4CK7fcCTrrxqq7BwpCZo",
  authDomain: "srshop-28285.firebaseapp.com",
  databaseURL: "https://srshop-28285.firebaseio.com",
  projectId: "srshop-28285",
  storageBucket: "srshop-28285.appspot.com",
  messagingSenderId: "431303566999",
  appId: "1:431303566999:web:c61fa355c816e13c5debd2",
  measurementId: "G-WEJZ1GMT3B",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

// export const fireStore = firebase.firestore();

var googleProvider = new firebase.auth.GoogleAuthProvider();
var facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signinWithGoogle = () =>
  firebase.auth().signInWithPopup(googleProvider);
export const signinWithFacebook = () =>
  firebase.auth().signInWithPopup(facebookProvider);
export const logout = async () => {
  firebase.auth().signOut();
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  let userRef;
  try {
    userRef = firebase.firestore().doc(`users/${userAuth.uid}`);
    let snapShot = await userRef.get();
    if (!snapShot.exists) {
      console.log("writing to firestore");
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log("createUserProfileDocument error", e);
  }
  return userRef;
};
