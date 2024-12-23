// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmj-REJWMrLOzjvZLUF0X2zeO7vGRWIIM",
  authDomain: "quiz-managemet-sytem.firebaseapp.com",
  projectId: "quiz-managemet-sytem",
  storageBucket: "quiz-managemet-sytem.appspot.com",
  messagingSenderId: "778612835034",
  appId: "1:778612835034:web:2b31b74f56cf95ffc2dbe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;
