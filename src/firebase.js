import firebase from 'firebase';
// import {initializeApp} from 'firebase/App';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjQq8bD4v4Wss9qG-91QvPRQym5t_K4j0",
    authDomain: "message-app-42abe.firebaseapp.com",
    projectId: "message-app-42abe",
    storageBucket: "message-app-42abe.appspot.com",
    messagingSenderId: "940632046600",
    appId: "1:940632046600:web:ecd15f9c166e2e91fa25bd",
    measurementId: "G-RY10GX7DF7"
});

const db = firebaseApp.firestore();

export default db;