import React from 'react';
import Router from './Router';
import Page from './Page';
import Explore from './Explore';

export default function App() {
  return (
    <Router
      routes={[
        {
          path: /^\/library\/?$/,
          render: () => <Page title="Library" />
        },
        {
          path: /^\/explore\/?$/,
          render: () => <Explore />
        },
        {
          path: /.*/,
          redirect: '/library'
        }
      ]}
    />
  );
}
