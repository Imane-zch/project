//Needs to hash the data!!
// Firebase App (the core Firebase SDK)

import * as firebase from "firebase/app";

// Add Firebase Auth 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";





export const firebaseConfig = {
    apiKey: "AIzaSyAEDcctbHKjBoCYl3ZGsRpJUOGuN3lma9s",
    authDomain: "mindflow-5e3c5.firebaseapp.com",
    projectId: "mindflow-5e3c5",
    storageBucket: "mindflow-5e3c5.appspot.com",
    messagingSenderId: "192596122826",
    appId: "1:192596122826:web:8a5aba33996adfacd8a833",
    measurementId: "G-QP9DKPZPRG"
  };



  initializeApp(firebaseConfig);



  const auth = getAuth();
  
  export default {
    auth
  };