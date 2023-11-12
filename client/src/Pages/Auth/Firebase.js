// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEo57bQ5iocvksfMLWkiGRiHaKiWfnrpg",
  authDomain: "messangergpt.firebaseapp.com",
  projectId: "messangergpt",
  storageBucket: "messangergpt.appspot.com",
  messagingSenderId: "1079401094909",
  appId: "1:1079401094909:web:a5f4278b47516512e22894",
  measurementId: "G-NQ0CGDQW0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// export { db };
export { auth, provider, db };
