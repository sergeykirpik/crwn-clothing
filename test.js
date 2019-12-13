import firebase from 'firebase/app';

import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('pAz0il0JHY6swKZkSnRl')
  .collection('cartItems')
  .doc('4HPT8A3cTgSOlgCi098r');

firestore.doc('/users/pAz0il0JHY6swKZkSnRl/cartItems/4HPT8A3cTgSOlgCi098r');

firestore.collection('/users/pAz0il0JHY6swKZkSnRl/cartItems');
