import React from 'react';
import Router from './Router';
import Page from '../Page';
import Explore from '../Explore';
import QuizDetails from '../QuizDetails';

export default function App() {
  return (
    <Router
      routes={[
        {
          path: /^\/library\/?$/,
          render: () => <Page appBarProps={{ title: 'Library' }} />
        },
        {
          path: /^\/explore\/?$/,
          render: () => <Explore />
        },
        {
          path: /^\/quiz\/details\/(\d+)\/?$/,
          render: ({ match }) => <QuizDetails id={match[1]} />
        },
        {
          path: /.*/,
          redirect: '/library'
        }
      ]}
    />
  );
}
