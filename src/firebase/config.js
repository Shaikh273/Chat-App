// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKdDPtFGl1oVuN5s_KG_rz2bmy4NTdfDQ",
    authDomain: "chat-app-dc954.firebaseapp.com",
    projectId: "chat-app-dc954",
    storageBucket: "chat-app-dc954.appspot.com",
    messagingSenderId: "710996173944",
    appId: "1:710996173944:web:058b24457e4759d7c2f98d",
    measurementId: "G-CFGVEPPM2X",
    databaseURL: "https://chat-app-dc954-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps[0];

export default firebaseApp;