import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCq32BsydiBX4HPOt2LXoW72eHub8Xi2JI",
  authDomain: "chat-pdf-e787a.firebaseapp.com",
  projectId: "chat-pdf-e787a",
  storageBucket: "chat-pdf-e787a.appspot.com",
  messagingSenderId: "815777860548",
  appId: "1:815777860548:web:07e6cfe7209255fc8a3291",
  measurementId: "G-T942HJDC56"
};

// Initialize the Firebase app if it hasn't been initialized yet
// This is a no-op if the app has already been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export {db, storage}
