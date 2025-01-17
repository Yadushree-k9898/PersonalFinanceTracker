// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDix8qdUUxEtA2cmX2IGhA-14b9CHD2gIc",
  authDomain: "moneyminder-a5cbf.firebaseapp.com",
  projectId: "moneyminder-a5cbf",
  storageBucket: "moneyminder-a5cbf.firebasestorage.app",
  messagingSenderId: "37701012025",
  appId: "1:37701012025:web:6bf767a44d07b9553cdbe8",
  measurementId: "G-QQPH2TSW2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
