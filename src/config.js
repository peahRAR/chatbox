// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwxatL2R8a4Rx4f-e6yq9hiCf6tA1Bz6s",
  authDomain: "chatbox-app-847a4.firebaseapp.com",
  projectId: "chatbox-app-847a4",
  storageBucket: "chatbox-app-847a4.appspot.com",
  messagingSenderId: "57185071133",
  appId: "1:57185071133:web:ea13ac3536fe192a1596f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

