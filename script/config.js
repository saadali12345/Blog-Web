import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

 const firebaseConfig = {
    apiKey: "AIzaSyCPHwsk0gcieJqwFuwz8o59WHmzyto8dzM",
    authDomain: "personal-blogging-app-8e2c7.firebaseapp.com",
    projectId: "personal-blogging-app-8e2c7",
    storageBucket: "personal-blogging-app-8e2c7.appspot.com",
    messagingSenderId: "186872464220",
    appId: "1:186872464220:web:9c6602f3c6ebdd92ff3799",
    measurementId: "G-MYJV7JDBL3"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);