// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAc7hjGuPqN7LDsSjOKsdwQFq9mT22cyw",
  authDomain: "skill-swap-3a076.firebaseapp.com",
  projectId: "skill-swap-3a076",
  storageBucket: "skill-swap-3a076.appspot.com",   // notice `.app` was wrong, should be `.com`
  messagingSenderId: "791837763430",
  appId: "1:791837763430:web:375288f9a7c620f060caa7",
  measurementId: "G-RY72L6815Q"
};

const app = initializeApp(firebaseConfig);

// ✅ export all the services you want to use
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);