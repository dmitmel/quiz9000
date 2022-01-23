import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBJE8KocVC4jDAoSb6AeUYaD3Z6qL2kMEc',
  authDomain: 'quiz9000-db.firebaseapp.com',
  databaseURL: 'https://quiz9000-db.firebaseio.com',
  projectId: 'quiz9000-db',
};

firebase.initializeApp(config);

export default firebase;

export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export const auth = firebase.auth();
