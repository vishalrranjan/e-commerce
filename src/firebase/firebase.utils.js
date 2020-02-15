import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhXG0qLKg8sZDRBAmaJwJqF8-Or8WWxc4",
    authDomain: "e-commerce-db-11a30.firebaseapp.com",
    databaseURL: "https://e-commerce-db-11a30.firebaseio.com",
    projectId: "e-commerce-db-11a30",
    storageBucket: "e-commerce-db-11a30.appspot.com",
    messagingSenderId: "147558855481",
    appId: "1:147558855481:web:40df2f8b5b476fa580aee8",
    measurementId: "G-CZENEV2XNT"
  };
// storing user in firestore databse 
const createUserProfileDocument = async (userAuth,additionalData) => {

}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
 //google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;