// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAc7hjGuPqN7LDsSjOKsdwQFq9mT22cyw",
  authDomain: "skill-swap-3a076.firebaseapp.com",
  projectId: "skill-swap-3a076",
  storageBucket: "skill-swap-3a076.firebasestorage.app",
  messagingSenderId: "791837763430",
  appId: "1:791837763430:web:375288f9a7c620f060caa7",
  measurementId: "G-RY72L6815Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);