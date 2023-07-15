import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDfU4nHDXy0gLRX9FTC0-o2BKplT1ljn50",
    authDomain: "disney-plus-clone-1c4dc.firebaseapp.com",
    projectId: "disney-plus-clone-1c4dc",
    storageBucket: "disney-plus-clone-1c4dc.appspot.com",
    messagingSenderId: "743289330238",
    appId: "1:743289330238:web:e6a50c6c7b7139cc718f6f",
    measurementId: "G-HPME3CP24B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { auth, provider, storage };
export default db;