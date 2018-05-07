import React from 'react';
import PropTypes from 'prop-types';
import Page, { PageContent } from '../Page';
import MainAppBar from '../../containers/MainAppBar';
import QuizList from '../QuizList';

const Library = ({ quizzes }) => (
  <Page>
    <MainAppBar title="Library" />
    <PageContent>
      <QuizList quizzes={quizzes} />
    </PageContent>
  </Page>
);

Library.propTypes = {
  quizzes: PropTypes.array.isRequired,
};

export default Library;
