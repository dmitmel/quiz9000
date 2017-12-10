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

  function createQuery(count) {
    return listRefByKeys
      .startAt(String(fetchedCount))
      .limitToFirst(count)
      .once('value');
  }

  return {
    fetchMore: count =>
      createQuery(count).then(snapshot => {
        const fetchedQuizzes = snapshot.val();
        fetchedCount += fetchedQuizzes.length;
        return fetchedQuizzes;
      }),
    reload: () => createQuery(fetchedCount).then(snapshot => snapshot.val())
  };
}
