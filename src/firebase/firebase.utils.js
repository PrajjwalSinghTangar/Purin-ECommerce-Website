import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCCN-8lPEVP_xL4W_9xjuUB7nFycTJx3FI",
  authDomain: "purin-ecommerceapi.firebaseapp.com",
  projectId: "purin-ecommerceapi",
  storageBucket: "purin-ecommerceapi.appspot.com",
  messagingSenderId: "737298741957",
  appId: "1:737298741957:web:ee8b3ba4a5440ff89f4eac",
  measurementId: "G-B6MDWTFBNE"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const emailProvider = new firebase.auth.EmailAuthProvider();
export const signInWithEmail = () => auth.signInWithPopup(emailProvider);


export default firebase;