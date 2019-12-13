import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCHmeb1cwZm9a-UME4k5I7S6QT8TGC89X0',
  authDomain: 'crwn-db-91645.firebaseapp.com',
  databaseURL: 'https://crwn-db-91645.firebaseio.com',
  projectId: 'crwn-db-91645',
  storageBucket: 'crwn-db-91645.appspot.com',
  messagingSenderId: '627316289439',
  appId: '1:627316289439:web:a9702ac502fc5c82a357aa',
  measurementId: 'G-2V74Z1GKBH'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.error('error creating user', err.message);
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
