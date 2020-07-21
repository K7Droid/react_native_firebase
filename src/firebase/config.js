import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCU02F7GbEAPcue3s2b2jo7ldC6zAMQ_5A',
  authDomain: 'primerproyecto-7c523.firebaseapp.com',
  databaseURL: 'https://primerproyecto-7c523.firebaseio.com',
  projectId: 'primerproyecto-7c523',
  storageBucket: 'primerproyecto-7c523.appspot.com',
  messagingSenderId: '871276418943',
  appId: '1:871276418943:web:1268259006acdcdae2ac4a',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };