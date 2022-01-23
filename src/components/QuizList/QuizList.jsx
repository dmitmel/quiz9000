import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import QuizListItem from './QuizListItem';
import { map as mapObject } from '../../utils/object';

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
    {mapObject(
      quizzes,
      (id, quiz) => quiz && <QuizListItem key={id} id={id} {...quiz} />,
    )}
  </div>
);

QuizList.propTypes = {
  quizzes: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuizList);
