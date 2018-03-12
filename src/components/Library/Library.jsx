import React from 'react';
import Page, { PageContent } from '../Page';
import MainAppBar from '../../containers/MainAppBar';

const Library = () => (
  <Page>
    <MainAppBar title="Library" />
    <PageContent />
  </Page>
);

export default Library;
