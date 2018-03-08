import '@firebase/polyfill';
import firebase from '@firebase/app';
import '@firebase/database';

const config = {
  apiKey: 'AIzaSyBJE8KocVC4jDAoSb6AeUYaD3Z6qL2kMEc',
  authDomain: 'quiz9000-db.firebaseapp.com',
  databaseURL: 'https://quiz9000-db.firebaseio.com',
  projectId: 'quiz9000-db',
  storageBucket: '',
  messagingSenderId: '422403566378'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
