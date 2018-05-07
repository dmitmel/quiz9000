import { ADD_QUIZ, REMOVE_QUIZ } from '../types';

export function addQuiz(data) {
  return { type: ADD_QUIZ, data };
}

export function removeQuiz(id) {
  return { type: REMOVE_QUIZ, id };
}
