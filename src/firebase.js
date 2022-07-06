//import firebase from 'firebase/app'
//import  firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//import 'firebase/firestore';
import {  GoogleAuthProvider } from "firebase/auth";
import {signInWithPopup} from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAbhAbDBg45R6WSf6MP-bfrLw-FoLsf3So",
    authDomain: "sowmiya-whatsapp-clone.firebaseapp.com",
    projectId: "sowmiya-whatsapp-clone",
    storageBucket: "sowmiya-whatsapp-clone.appspot.com",
    messagingSenderId: "926161721631",
    appId: "1:926161721631:web:83ff3ceea405e0b301f82a",
    measurementId: "G-BGDHXYV1E7"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const provider = new GoogleAuthProvider();
  //const provider = new firebase.auth.GoogleAuthProvider()
  const auth = getAuth(firebaseApp);

 export {auth, provider,signInWithPopup};
  export default db;
  
