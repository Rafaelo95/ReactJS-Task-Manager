import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjGPZYfcpvQVVx78RY7lxWGqWljcY7gt0",
  authDomain: "task-manager-cf749.firebaseapp.com",
  projectId: "task-manager-cf749",
  storageBucket: "task-manager-cf749.appspot.com",
  messagingSenderId: "287510978983",
  appId: "1:287510978983:web:e35bd1aae54e2653949682",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { firestore, auth, timestamp };
