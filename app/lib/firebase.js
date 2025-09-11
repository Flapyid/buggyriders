// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ import storage

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuJFhpxeA7t0xQNk3CjCNuer2BYeLVR3Y",
  authDomain: "puthuma-4c6b3.firebaseapp.com",
  projectId: "puthuma-4c6b3",
  storageBucket: "puthuma-4c6b3.appspot.com", // ❌ was wrong, should be .appspot.com
  messagingSenderId: "620326008308",
  appId: "1:620326008308:web:0927aa42e872f02c6db5a1",
  measurementId: "G-PKL7LE0RSL",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore & Storage
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Export both
export { db, storage };
