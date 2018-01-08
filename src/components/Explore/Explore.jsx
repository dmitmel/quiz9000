import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import Page from '../../containers/Page';
import ExploreListItem from './ExploreListItem';

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

const quizzesPerPage = 10;

Explore.propTypes = {
  loading: PropTypes.bool.isRequired,
  quizzes: PropTypes.array.isRequired,
  fetchMore: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

function Explore({ loading, quizzes, fetchMore, onRefresh, classes }) {
  const hasQuizzes = Boolean(quizzes && quizzes.length);

  const appBarProps = {
    title: 'Explore',
    buttons: [
      <IconButton color="contrast" aria-label="Search">
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

  const renderProgress = size => (
    <CircularProgress size={size} className={classes.progress} />
  );

  return (
    <Page appBarProps={appBarProps}>
      {hasQuizzes ? (
        <>
          <List className={classes.list}>
            {quizzes.map(
              quiz => quiz && <ExploreListItem key={quiz.id} quiz={quiz} />
            )}
          </List>
          <Button
            raised
            color="accent"
            className={classes.moreBtn}
            disabled={loading}
            onClick={() => fetchMore(quizzesPerPage)}>
            More...
            {loading && renderProgress(36)}
          </Button>
        </>
      ) : (
        loading && renderProgress(48)
      )}
    </Page>
  );
}

export default compose(
  lifecycle({
    componentDidMount() {
      const { fetchMore } = this.props;
      fetchMore(quizzesPerPage);
    }
  }),
  withStyles(styles)
)(Explore);
