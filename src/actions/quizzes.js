export const ADD_QUIZ = '@@NavDrawer/ADD_QUIZ';

export function addQuiz(id, quiz) {
  return { type: ADD_QUIZ, id, quiz };
}
