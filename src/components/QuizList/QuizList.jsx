import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import QuizListItem from './QuizListItem';

const styles = theme => ({
  root: {
    display: 'flex',
    // compensate margins of `QuizListItem`s
    margin: -theme.spacing.unit,
    flexWrap: 'wrap',
  },
});

const QuizList = ({ quizzes, classes }) => (
  <div className={classes.root}>
    {quizzes.map(quiz => quiz && <QuizListItem key={quiz.id} {...quiz} />)}
  </div>
);

QuizList.propTypes = {
  quizzes: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuizList);
