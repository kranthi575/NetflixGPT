// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL_8Vlk32x6vGkRwfC-CLbz-h1jDYZyCQ",
  authDomain: "netflixgpt-448b1.firebaseapp.com",
  projectId: "netflixgpt-448b1",
  storageBucket: "netflixgpt-448b1.appspot.com",
  messagingSenderId: "1024773666353",
  appId: "1:1024773666353:web:270a99dd67a0bba9e60710",
  measurementId: "G-K80WGQ53GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();
export default auth;