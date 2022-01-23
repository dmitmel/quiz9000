import { ADD_QUIZ, REMOVE_QUIZ } from '../types';

export function addQuiz(id) {
  return { type: ADD_QUIZ, id };
}

export function removeQuiz(id) {
  return { type: REMOVE_QUIZ, id };
}
