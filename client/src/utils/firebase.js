// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxXw1eM9ZnvCEyM4vzeYmfdAFA3fyC7DM",
  authDomain: "glse-57741.firebaseapp.com",
  projectId: "glse-57741",
  storageBucket: "glse-57741.appspot.com",
  messagingSenderId: "1099341154932",
  appId: "1:1099341154932:web:d015005c7cc8454a8c5f21",
  measurementId: "G-XRQ2HR5GQ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
