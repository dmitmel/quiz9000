import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import QuizListItem from './QuizListItem';

const styles = theme => ({
  list: {
    background: theme.palette.background.paper
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  moreBtn: {
    display: 'block',
    margin: '0 auto',
    marginTop: theme.spacing.unit * 2,
    position: 'relative'
  }
});

QuizList.propTypes = {
  loading: PropTypes.bool.isRequired,
  quizzes: PropTypes.array.isRequired,
  fetchMore: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

function QuizList({ loading, quizzes, fetchMore, classes }) {
  const hasQuizzes = Boolean(quizzes && quizzes.length);

  const renderProgress = size => (
    <CircularProgress size={size} className={classes.progress} />
  );

  return hasQuizzes ? (
    <>
      <List className={classes.list}>
        {quizzes.map(quiz => quiz && <QuizListItem key={quiz.id} {...quiz} />)}
      </List>
      <Button
        raised
        color="accent"
        className={classes.moreBtn}
        disabled={loading}
        onClick={fetchMore}>
        More...
        {loading && renderProgress(36)}
      </Button>
    </>
  ) : (
    loading && renderProgress(48)
  );
}

export default withStyles(styles)(QuizList);
