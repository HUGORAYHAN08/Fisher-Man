// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIdVJE3eCu4NXftqQ38KjbqkmwozLMKyI",
  authDomain: "fisherman-afa2c.firebaseapp.com",
  databaseURL: "https://fisherman-afa2c-default-rtdb.firebaseio.com",
  projectId: "fisherman-afa2c",
  storageBucket: "fisherman-afa2c.appspot.com",
  messagingSenderId: "481434304789",
  appId: "1:481434304789:web:1475fc8944c20bcf59a91c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const db = getFirestore(app);

export { Auth, db };
