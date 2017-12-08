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
export function* quizzesGenerator() {
  let countToFetch = yield;
  let nextRef = listRefByKeys;

  function fetchMore() {
    return nextRef
      .limitToFirst(countToFetch + /* fetch one more to get next key */ 1)
      .once('value')
      .then(snapshot => {
        const fetchedQuizzes = [];

        // read fetched quizzes
        let i = 0;
        snapshot.forEach(quizRef => {
          if (i < countToFetch) fetchedQuizzes.push(quizRef.val());
          else
            // create ref to next page
            nextRef = listRefByKeys.startAt(quizRef.key);
          i++;
        });

        return fetchedQuizzes;
      });
  }

  do countToFetch = yield fetchMore(countToFetch);
  while (true);
}
