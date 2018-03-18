import firebase from '@firebase/app';
import '@firebase/database';

const config = {
  databaseURL: 'https://quiz9000-db.firebaseio.com'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
