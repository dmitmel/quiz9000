export const SAVE_QUIZ = '@@Library/SAVE_QUIZ';
export const REMOVE_QUIZ = '@@Library/REMOVE_QUIZ';

export function saveQuiz(id) {
  return { type: SAVE_QUIZ, id };
}

export function removeQuiz(id) {
  return { type: REMOVE_QUIZ, id };
}
