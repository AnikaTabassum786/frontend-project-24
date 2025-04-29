// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaDdRe4A3zz_Jq4VSwTMaX7i58dwxnb2A",
  authDomain: "auth-recap-4d70b.firebaseapp.com",
  projectId: "auth-recap-4d70b",
  storageBucket: "auth-recap-4d70b.firebasestorage.app",
  messagingSenderId: "121324211710",
  appId: "1:121324211710:web:aba1fd2e560d0958af04af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);