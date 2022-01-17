// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB3zbZl-VkrcKGiGpY9-ucF6no9PDzEhIs",
    authDomain: "commerce-db-cafdf.firebaseapp.com",
    projectId: "commerce-db-cafdf",
    storageBucket: "commerce-db-cafdf.appspot.com",
    messagingSenderId: "69949904753",
    appId: "1:69949904753:web:c5f8c183f228e1d3f2c8d0",
    measurementId: "G-P7QMXM0BNT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
