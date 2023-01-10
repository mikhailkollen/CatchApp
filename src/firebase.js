// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDOTIDpk61cG7A_iq-56PxNzlBbCbe7Nw",
  authDomain: "catchapp-a0997.firebaseapp.com",
  projectId: "catchapp-a0997",
  storageBucket: "catchapp-a0997.appspot.com",
  messagingSenderId: "653166865356",
  appId: "1:653166865356:web:4e1901821bbe9205cdcb69",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
