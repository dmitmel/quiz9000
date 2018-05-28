/* istanbul ignore file */

import { database } from './';

export const rootRef = database.ref('/quizzes');
export const listRef = rootRef.child('list');
export const lengthRef = rootRef.child('length');

export function findQuizBy(prop, val) {
  return listRef
    .orderByChild(prop)
    .equalTo(val)
    .limitToFirst(1)
    .once('child_added')
    .then(snapshot => snapshot.val());
}

export function fetchQuizzes(offset, limit) {
  return listRef
    .startAt(null, String(offset))
    .limitToFirst(limit)
    .once('value')
    .then(snapshot => {
      const quizzes = [];
      snapshot.forEach(quizSnapshot => {
        quizzes.push(quizSnapshot.val());
      });
      return quizzes;
    });
}
