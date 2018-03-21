import { ADD_QUIZ } from '../types';

export function addQuiz(id, quiz) {
  return { type: ADD_QUIZ, id, quiz };
}
