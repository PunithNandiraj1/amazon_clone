import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSUHk3TMGz2R-ahhkb83GMZxa03knZ8eU",
    authDomain: "clone-e814a.firebaseapp.com",
    databaseURL: "https://clone-e814a.firebaseio.com",
    projectId: "clone-e814a",
    storageBucket: "clone-e814a.appspot.com",
    messagingSenderId: "298401990371",
    appId: "1:298401990371:web:d05b073c14aab4df9d27d6",
    measurementId: "G-3H9GLFZYWY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };