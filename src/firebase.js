// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuxfBzacJoHhyTVU0DrtuzIJ0PTFWoyLo",
  authDomain: "task-manager-project-80c73.firebaseapp.com",
  projectId: "task-manager-project-80c73",
  storageBucket: "task-manager-project-80c73.appspot.com",
  messagingSenderId: "272567667927",
  appId: "1:272567667927:web:5ddda92713c40e6bda7492",
  measurementId: "G-KK5EFT2SJ1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const auth = getAuth(app);