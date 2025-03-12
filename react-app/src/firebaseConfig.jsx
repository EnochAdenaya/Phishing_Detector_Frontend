// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH2z1PSf5MVieaoE0fD1Axwi4CFw0lJXg",
  authDomain: "phishing-detector-76aea.firebaseapp.com",
  projectId: "phishing-detector-76aea",
  storageBucket: "phishing-detector-76aea.firebasestorage.app",
  messagingSenderId: "456331866677",
  appId: "1:456331866677:web:24f5d33c18a8768367b77c",
  measurementId: "G-DSLFERSQQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
