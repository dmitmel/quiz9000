import React from 'react';
import Router from './Router';
import Page from './Page';

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
          render: () => <Page title="Explore" />
        },
        {
          path: /.*/,
          redirect: '/library'
        }
      ]}
    />
  );
}
