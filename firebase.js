// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStore } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtYmHwL4IqHRARCxLyLMCbVRicGCRoCcQ",
    authDomain: "easy-instagram.firebaseapp.com",
    projectId: "easy-instagram",
    storageBucket: "easy-instagram.appspot.com",
    messagingSenderId: "76647394491",
    appId: "1:76647394491:web:6fe395477178438bdecd9e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };