import React from 'react';
import Page, { PageContent } from '../Page';
import MainAppBar from '../../containers/MainAppBar';

export default function Library() {
  return (
    <Page>
      <MainAppBar title="Library" />
      <PageContent />
    </Page>
  );
}
