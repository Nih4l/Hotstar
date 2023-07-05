// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDu3h1W3MCokAOQKMkEEeIiLVKaV73c7Uw",
  authDomain: "netflix-78fca.firebaseapp.com",
  projectId: "netflix-78fca",
  storageBucket: "netflix-78fca.appspot.com",
  messagingSenderId: "834462469890",
  appId: "1:834462469890:web:6967aeadc94f8e8c8d7c1b"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);