import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDKEc56DasKacSXBURj7FZb3gN3s0eWzE",
  authDomain: "indeed-clone-b5cff.firebaseapp.com",
  projectId: "indeed-clone-b5cff",
  storageBucket: "indeed-clone-b5cff.appspot.com",
  messagingSenderId: "776590810987",
  appId: "1:776590810987:web:eae7a8e571b9451ca9362e",
  measurementId: "G-NQHCGF62D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);