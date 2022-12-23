// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBud6BAZqrjE30mNhOmL5bxNXW3W4YRFlo",
  authDomain: "authentication-app-7b2b4.firebaseapp.com",
  projectId: "authentication-app-7b2b4",
  storageBucket: "authentication-app-7b2b4.appspot.com",
  messagingSenderId: "750081212753",
  appId: "1:750081212753:web:d47e3de78f8793545c5370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app