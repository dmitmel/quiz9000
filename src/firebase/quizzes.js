/* istanbul ignore file */

import { firestore } from './';

const quizzesCollection = firestore.collection('quizzes');

export function fetchQuiz(id) {
  return quizzesCollection
    .doc(id)
    .get()
    .then(docSnapshot => docSnapshot.data());
}

export function fetchQuizzes(offset, limit) {
  return quizzesCollection
    .limit(offset + limit)
    .get()
    .then(collectionSnapshot =>
      collectionSnapshot.docs.reduce((quizzes, quizSnapshot, index) => {
        if (index >= offset) quizzes[quizSnapshot.id] = quizSnapshot.data();
        return quizzes;
      }, {}),
    );
}
