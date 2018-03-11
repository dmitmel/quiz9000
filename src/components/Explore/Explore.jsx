import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Page from '../Page';
import QuizList from '../QuizList';

Explore.propTypes = {
  loading: PropTypes.bool.isRequired,
  quizzes: PropTypes.array.isRequired,
  fetchMore: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired
};

export default function Explore({ loading, quizzes, fetchMore, onRefresh }) {
  const hasQuizzes = Boolean(quizzes && quizzes.length);

  const appBarProps = {
    title: 'Explore',
    buttons: [
      <IconButton color="inherit" aria-label="Search">
        <Icon>search</Icon>
      </IconButton>
    ],
    menuItems: [
      {
        name: 'Sort by'
      },
      {
        name: 'Refresh',
        disabled: !hasQuizzes || loading,
        onClick: onRefresh
      }
    ]
  };

  return (
    <Page appBarProps={appBarProps}>
      <QuizList
        loading={loading}
        quizzes={quizzes}
        fetchMore={fetchMore}
        onRefresh={onRefresh}
      />
    </Page>
  );
}
