// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfZbgSZSFIwAvQ7qulHRmMSmuAqfvOeQI",
  authDomain: "strong-suplementos.firebaseapp.com",
  projectId: "strong-suplementos",
  storageBucket: "strong-suplementos.appspot.com",
  messagingSenderId: "115770730604",
  appId: "1:115770730604:web:eec796806da95050991049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app