// import { firebase } from 'firebase/app';
// import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
// import { auth } from "../firebase";

const config = {
    apiKey: "AIzaSyDUJM9eoCWvC4RRZqvoWjrh7uhcUgZmzhk",
    authDomain: "crown-db-179e1.firebaseapp.com",
    projectId: "crown-db-179e1",
    storageBucket: "crown-db-179e1.appspot.com",
    messagingSenderId: "958307722270",
    appId: "1:958307722270:web:73090c3bc3cd470b327a0f",
    measurementId: "G-KMYVCERZ63"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();
   
   if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email, 
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
   }

   return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;