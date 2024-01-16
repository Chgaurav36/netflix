// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPYuxl2Q39P3Z7sv_BEqaAgktXc717lhA",
  authDomain: "react-netflix-clone-5e918.firebaseapp.com",
  projectId: "react-netflix-clone-5e918",
  storageBucket: "react-netflix-clone-5e918.appspot.com",
  messagingSenderId: "958593022590",
  appId: "1:958593022590:web:5a1bd4eb9f80de692f362f",
  measurementId: "G-1G06VVJ163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
