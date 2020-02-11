import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDbpTk0sb_hwIC9Dz6zyIJczdK11fkBSrc",
  authDomain: "crwn-db-65054.firebaseapp.com",
  databaseURL: "https://crwn-db-65054.firebaseio.com",
  projectId: "crwn-db-65054",
  storageBucket: "crwn-db-65054.appspot.com",
  messagingSenderId: "227927203502",
  appId: "1:227927203502:web:0cb3b6d9207cdcd5b9173f",
  measurementId: "G-G950NZ76MY"
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
