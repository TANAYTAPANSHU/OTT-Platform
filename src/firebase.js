import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAURIFruoSq5IdGggLUhJbmbBYyhmdIZvw",
    authDomain: "react-disney-hotstar.firebaseapp.com",
    projectId: "react-disney-hotstar",
    storageBucket: "react-disney-hotstar.appspot.com",
    messagingSenderId: "156425476720",
    appId: "1:156425476720:web:f90e4f9d6935ee3ae0f2b5",
    measurementId: "G-GN5EFJFT02"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore();
export const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);