import { ADD_QUIZ, REMOVE_QUIZ } from '../types';

export function addQuiz(id, data) {
  return { type: ADD_QUIZ, id, data };
}

export function removeQuiz(id) {
  return { type: REMOVE_QUIZ, id };
}
