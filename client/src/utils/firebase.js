
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrBrMPb5ZbgB7-pLAC6nAb492DJYZrWWc",
  authDomain: "interviewiq-2e139.firebaseapp.com",
  projectId: "interviewiq-2e139",
  storageBucket: "interviewiq-2e139.firebasestorage.app",
  messagingSenderId: "561210279556",
  appId: "1:561210279556:web:0623c48707ab35e189e4d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
