import React from 'react';
import PropTypes from 'prop-types';
import Page, { PageContent } from '../Page';
import MainAppBar from '../../containers/MainAppBar';
import QuizList from '../QuizList';
import UploadQuiz from './UploadQuiz';

const Library = ({ quizzes, addQuiz }) => (
  <Page>
    <MainAppBar title="Library" />
    <PageContent>
      <QuizList quizzes={quizzes} />
      <UploadQuiz addQuiz={addQuiz} />
    </PageContent>
  </Page>
);

Library.propTypes = {
  quizzes: PropTypes.array.isRequired,
  addQuiz: PropTypes.func.isRequired
};

export default Library;
