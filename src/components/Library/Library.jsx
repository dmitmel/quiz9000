import React from 'react';
import Page, { PageContent } from '../Page';
import MainAppBar from '../../containers/MainAppBar';
import UploadQuiz from '../UploadQuiz';

const Library = () => (
  <Page>
    <MainAppBar title="Library" />
    <PageContent>
      <UploadQuiz />
    </PageContent>
  </Page>
);

export default Library;
