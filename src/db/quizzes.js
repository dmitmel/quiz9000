import { database } from './firebase';

export const listRef = database.ref('/quizzes/list');

export function findQuizBy(prop, val) {
  return listRef
    .orderByChild(prop)
    .equalTo(val)
    .limitToFirst(1)
    .once('child_added')
    .then(snapshot => snapshot.val());
}

const listRefByKeys = listRef.orderByKey();
export function* quizzesToPages(quizzesPerPage) {
  let nextRef = listRefByKeys;

  function fetchMore() {
    return nextRef
      .limitToFirst(quizzesPerPage + /* fetch one more to get next key */ 1)
      .once('value')
      .then(snapshot => {
        const fetchedQuizzes = [];

        // read fetched quizzes
        let i = 0;
        snapshot.forEach(quizRef => {
          if (i < quizzesPerPage) fetchedQuizzes.push(quizRef.val());
          else
            // create ref to next page
            nextRef = listRefByKeys.startAt(quizRef.key);
          i++;
        });

        return fetchedQuizzes;
      });
  }

  while (true) yield fetchMore();
}
