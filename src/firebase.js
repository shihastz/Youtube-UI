import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADNNIAgvCZIKGhg1nx01tO2W4l16aBzNE",
  authDomain: "clone-a43d7.firebaseapp.com",
  projectId: "clone-a43d7",
  storageBucket: "clone-a43d7.appspot.com",
  messagingSenderId: "635030035388",
  appId: "1:635030035388:web:308022c11b0d09aa83a9b9",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
