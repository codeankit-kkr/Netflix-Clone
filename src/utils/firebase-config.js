// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDCJ_R0k8qnv9YdrWjlT9HKeFIR31eSaac",
    authDomain: "movieflix-8d883.firebaseapp.com",
    projectId: "movieflix-8d883",
    storageBucket: "movieflix-8d883.appspot.com",
    messagingSenderId: "1095825657155",
    appId: "1:1095825657155:web:2f2da7e59f5b3c29f0f3f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);