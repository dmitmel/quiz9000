import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import { MenuItem } from 'material-ui/Menu';
import Page from '../Page';
import ExploreListItem from './ExploreListItem';
import { quizzes as quizzesDB } from '../../db';
import setState from '../../utils/setState';

const styles = theme => ({
  list: {
    background: theme.palette.background.paper
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  loadingList: {
    display: 'block',
    margin: '0 auto',
    marginTop: theme.spacing.unit * 2.75
  }
});

const quizzesPerPage = 10;
const scrollThreshold = 25;

const LoadingState = {
  noLoading: 0,
  fetchingMore: 1,
  refreshing: 2
};

class Explore extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    quizzes: null,
    loadingState: LoadingState.noLoading
  };

  _quizzesLength = 0;

  componentDidMount() {
    this._quizzesGen = quizzesDB.quizzesToPages();

    // get length of the list without downloading it
    quizzesDB.lengthRef.once('value', snapshot => {
      this._quizzesLength = snapshot.val();
      this._fetchMore();
    });
  }

  _fetchMore = () => {
    if (this.state.loadingState !== LoadingState.noLoading) return null;

    const currentQuizzes = this.state.quizzes || [];
    if (currentQuizzes.length >= this._quizzesLength) return null;

    const { scrollTop, scrollHeight, clientHeight } = this.content;
    if (scrollTop + clientHeight < scrollHeight - scrollThreshold) return null;

    return (
      setState(this, { loadingState: LoadingState.fetchingMore })
        // start loading
        .then(() => this._quizzesGen.fetchMore(quizzesPerPage))
        // update state
        .then(fetchedQuizzes =>
          setState(this, ({ quizzes }) => ({
            quizzes: (quizzes || []).concat(fetchedQuizzes),
            loadingState: LoadingState.noLoading
          }))
        )
        // try again
        .then(this._fetchMore)
    );
  };

  _refresh = () => {
    if (this.state.loadingState !== LoadingState.noLoading) return null;

    return setState(this, {
      quizzes: null,
      loadingState: LoadingState.refreshing
    })
      .then(this._quizzesGen.refresh)
      .then(fetchedQuizzes =>
        setState(this, {
          quizzes: fetchedQuizzes,
          loadingState: LoadingState.noLoading
        })
      );
  };

  render() {
    const { classes } = this.props;
    const { quizzes, loadingState } = this.state;

    const appBarProps = {
      title: 'Explore',
      buttons: [
        <IconButton color="contrast" aria-label="Search">
          <Icon>search</Icon>
        </IconButton>
      ],
      menuItems: [
        <MenuItem>Sort by</MenuItem>,
        <MenuItem
          disabled={loadingState !== LoadingState.noLoading}
          onClick={this._refresh}>
          Refresh
        </MenuItem>
      ]
    };

    return (
      <Page
        appBarProps={appBarProps}
        contentProps={{
          onScroll: this._fetchMore,
          ref: content => (this.content = content)
        }}>
        {quizzes && (
          <List className={classes.list}>
            {quizzes.map(quiz => <ExploreListItem key={quiz.id} {...quiz} />)}
          </List>
        )}

        {loadingState !== LoadingState.noLoading && (
          <CircularProgress
            className={quizzes ? classes.loadingList : classes.loading}
          />
        )}
      </Page>
    );
  }
}

export default withStyles(styles)(Explore);
