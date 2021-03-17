import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs4zXlbN8RJLX8dsckD5tlgJKW5DfjkUc",
  authDomain: "workout-pen.firebaseapp.com",
  databaseURL: "https://workout-pen.firebaseio.com",
  projectId: "workout-pen",
  storageBucket: "workout-pen.appspot.com",
  messagingSenderId: "136953532879",
  appId: "1:136953532879:web:69d89640304c1d387242ba",
  measurementId: "G-4PBQB8C2BW"
};

const db = firebase.initializeApp(firebaseConfig).firestore();
const auth = firebase.auth();

export { firebase, auth, db };
