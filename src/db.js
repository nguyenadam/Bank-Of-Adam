import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmXdzwIo8-Mwd-WSwZDPOS7s4TET3MPYw",
    authDomain: "bank-of-adam.firebaseapp.com",
    databaseURL: "https://bank-of-adam.firebaseio.com",
    projectId: "bank-of-adam",
    storageBucket: "bank-of-adam.appspot.com",
    messagingSenderId: "677566503808",
    appId: "1:677566503808:web:7d78fb03e2f7951a517f65"
};

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()
