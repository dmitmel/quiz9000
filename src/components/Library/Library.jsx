import React from 'react';
import PropTypes from 'prop-types';
import Page, { PageContent } from '../Page';
import MainAppBar from '../../containers/MainAppBar';
import UploadQuiz from './UploadQuiz';

const Library = ({ addQuiz }) => (
  <Page>
    <MainAppBar title="Library" />
    <PageContent>
      <UploadQuiz addQuiz={addQuiz} />
    </PageContent>
  </Page>
);

Library.propTypes = {
  addQuiz: PropTypes.func.isRequired
};

export default Library;
