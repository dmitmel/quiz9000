import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBJE8KocVC4jDAoSb6AeUYaD3Z6qL2kMEc',
  authDomain: 'quiz9000-db.firebaseapp.com',
  databaseURL: 'https://quiz9000-db.firebaseio.com',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
