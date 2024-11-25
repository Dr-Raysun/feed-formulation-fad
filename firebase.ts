// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQJk0pW1o5XOV6gqORSWI9gQjBA9C-N1I",
  authDomain: "fad-elitebookproject.firebaseapp.com",
  projectId: "fad-elitebookproject",
  storageBucket: "fad-elitebookproject.appspot.com",
  messagingSenderId: "728116458643",
  appId: "1:728116458643:web:b3edeff79c180173d48966",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
