// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCxMPFd1MoUaI18_SvnoudsiJGvncQNyl4",
  authDomain: "react-netflix-7431c.firebaseapp.com",
  projectId: "react-netflix-7431c",
  storageBucket: "react-netflix-7431c.appspot.com",
  messagingSenderId: "1013115447943",
  appId: "1:1013115447943:web:379ee8414f1c6297942622",
  measurementId: "G-E38MGGF0CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)