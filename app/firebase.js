// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuoo7G5gv71k4ruGbO96WN5slMaLFo6-Q",
  authDomain: "tasktracker-49b12.firebaseapp.com",
  projectId: "tasktracker-49b12",
  storageBucket: "tasktracker-49b12.appspot.com",
  messagingSenderId: "302690121163",
  appId: "1:302690121163:web:30a958633b7942dc95f24e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
