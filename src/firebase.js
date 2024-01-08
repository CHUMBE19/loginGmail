// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWfQDH0TG4x3z2rfUUT5Ww88wWyQEoaMI",
  authDomain: "login-b5aca.firebaseapp.com",
  projectId: "login-b5aca",
  storageBucket: "login-b5aca.appspot.com",
  messagingSenderId: "548687406879",
  appId: "1:548687406879:web:4c9c18284f362395a2722a",
  measurementId: "G-BGTBPCPKRC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
