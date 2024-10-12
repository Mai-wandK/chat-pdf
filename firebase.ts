import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "chat-pdf.firebaseapp.com",
  projectId: "chat-pdf-",
  storageBucket: "chat-pdf-e787a.appspot.com",
  messagingSenderId: "870548",
  appId: "1:860548:web:07e6cfejkl255fc8a3291",
  measurementId: "G-jhklC56"
};

// Initialize the Firebase app if it hasn't been initialized yet
// This is a no-op if the app has already been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export {db, storage}
