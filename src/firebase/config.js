import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'key propia',
  authDomain: '[tu dominio].firebaseapp.com',
  databaseURL: '[url propia].firebaseio.com',
  projectId: 'id propio',
  storageBucket: 'url propio',
  messagingSenderId: 'id propio',
  appId: 'id propio',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };