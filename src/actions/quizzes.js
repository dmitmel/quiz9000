export const ADD_QUIZ = '@@NavDrawer/ADD_QUIZ';

export function addQuiz(quiz) {
  return { type: ADD_QUIZ, quiz };
}
