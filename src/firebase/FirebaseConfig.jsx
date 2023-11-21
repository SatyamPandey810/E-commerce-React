// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz5wrWAQDpROrOAn5O-rY2hujWo1opUT8",
    authDomain: "shopper-81d31.firebaseapp.com",
    projectId: "shopper-81d31",
    storageBucket: "shopper-81d31.appspot.com",
    messagingSenderId: "104020829885",
    appId: "1:104020829885:web:d4a8f01a93390d2971f9d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }