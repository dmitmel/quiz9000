import { database } from './firebase';

export const listRef = database.ref('/quizzes/list');
export const lengthRef = database.ref('/quizzes/length');

export function findQuizBy(prop, val) {
  return listRef
    .orderByChild(prop)
    .equalTo(val)
    .limitToFirst(1)
    .once('child_added')
    .then(snapshot => snapshot.val());
}

const listRefByKeys = listRef.orderByKey();
export function quizzesToPages() {
  let fetchedCount = 0;

  function getFetchedQuizzes(snapshot) {
    const fetchedQuizzes = [];
    snapshot.forEach(quizRef => {
      fetchedQuizzes.push(quizRef.val());
    });
    return fetchedQuizzes;
  }

  return {
    fetchMore: count =>
      listRefByKeys
        .startAt(String(fetchedCount))
        .limitToFirst(count)
        .once('value')
        .then(snapshot => {
          const fetchedQuizzes = getFetchedQuizzes(snapshot);
          fetchedCount += fetchedQuizzes.length;
          return fetchedQuizzes;
        }),
    refresh: () =>
      listRefByKeys
        .limitToFirst(fetchedCount)
        .once('value')
        .then(getFetchedQuizzes)
  };
}
