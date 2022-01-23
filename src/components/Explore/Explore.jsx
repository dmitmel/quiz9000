import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import MenuItem from 'material-ui/Menu/MenuItem';
import Button from 'material-ui/Button/Button';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import IconButton from 'material-ui/IconButton/IconButton';
import Icon from 'material-ui/Icon/Icon';
import Page, { PageContent } from '../Page';
import MainAppBar from '../../containers/MainAppBar';
import { MainAppBarMenu } from '../MainAppBar';
import QuizList from '../QuizList';

const styles = theme => ({
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  moreButton: {
    display: 'block',
    margin: '0 auto',
    marginTop: theme.spacing.unit * 2,
    position: 'relative',
  },
});

const Explore = ({
  loading,
  quizzesCount,
  quizzes,
  fetchMore,
  onRefresh,
  classes,
}) => {
  const hasQuizzes = Boolean(quizzesCount);

  const renderProgress = size => (
    <CircularProgress size={size} className={classes.progress} />
  );

  return (
    <Page>
      <MainAppBar title="Explore">
        <IconButton color="inherit" aria-label="Search">
          <Icon>search</Icon>
        </IconButton>
        <MainAppBarMenu>
          <MenuItem key="sort-by">Sort by</MenuItem>
          <MenuItem
            key="refresh"
            disabled={!hasQuizzes || loading}
            onClick={onRefresh}>
            Refresh
          </MenuItem>
        </MainAppBarMenu>
      </MainAppBar>

      <PageContent>
        {hasQuizzes ? (
          <>
            <QuizList quizzes={quizzes} />

            <Button
              variant="raised"
              color="secondary"
              className={classes.moreButton}
              disabled={loading}
              onClick={fetchMore}>
              More...
              {loading && renderProgress(36)}
            </Button>
          </>
        ) : (
          loading && renderProgress(48)
        )}
      </PageContent>
    </Page>
  );
};

Explore.propTypes = {
  loading: PropTypes.bool.isRequired,
  quizzesCount: PropTypes.number.isRequired,
  quizzes: PropTypes.object.isRequired,
  fetchMore: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Explore);
