import { SAVE_QUIZ, REMOVE_QUIZ } from '../types';

export function saveQuiz(id) {
  return { type: SAVE_QUIZ, id };
}

export function removeQuiz(id) {
  return { type: REMOVE_QUIZ, id };
}
