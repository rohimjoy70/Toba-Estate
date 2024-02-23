// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: "real-estate-6fab3.firebaseapp.com",
   projectId: "real-estate-6fab3",
   storageBucket: "real-estate-6fab3.appspot.com",
   messagingSenderId: "221173408759",
   appId: "1:221173408759:web:7cd067623a0a029c1a04f2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);