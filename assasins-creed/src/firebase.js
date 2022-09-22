// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwldeuZiyurmVHIpgWnyGaUMSxXH35_uc",
  authDomain: "assasins-creed-8efc4.firebaseapp.com",
  projectId: "assasins-creed-8efc4",
  storageBucket: "assasins-creed-8efc4.appspot.com",
  messagingSenderId: "691360277336",
  appId: "1:691360277336:web:1a2daf2125cdc6147afb2d",
  measurementId: "G-7KTFQT5K1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);