import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 const firebaseConfig = {
    apiKey: "AIzaSyA-JQWpYMH7gH6KAT2CSv62BpYcEoLk3PU",
    authDomain: "fir-app-fdb43.firebaseapp.com",
    projectId: "fir-app-fdb43",
    storageBucket: "fir-app-fdb43.firebasestorage.app",
    messagingSenderId: "576433621518",
    appId: "1:576433621518:web:16055f0fb190becf808a5f"
  };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);