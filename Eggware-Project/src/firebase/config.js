import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBau41NPBQDcDoMuP3M4KJNSrLWogiZyZE",
  authDomain: "eggware-9c35b.firebaseapp.com",
  projectId: "eggware-9c35b",
  storageBucket: "eggware-9c35b.firebasestorage.app",
  messagingSenderId: "511541486705",
  appId: "1:511541486705:web:329212a4709f240b3b67d0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);