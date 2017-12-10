import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import Page from '../Page';
import ExploreListItem from './ExploreListItem';
import database, { quizzes as quizzesDB } from '../../db';
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

class Explore extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    quizzes: null,
    loading: false
  };

  _quizzesLength = 0;

  componentDidMount() {
    this._quizzesGen = quizzesDB.quizzesToPages(quizzesPerPage);

    // get length of the list without downloading it
    database.ref('/quizzes/length').once('value', snapshot => {
      this._quizzesLength = snapshot.val();
      this._fetchMore();
    });
  }

  _fetchMore = () => {
    if (this.state.loading) return null;

    const currentQuizzes = this.state.quizzes || [];
    if (currentQuizzes.length >= this._quizzesLength) return null;

    const { scrollTop, scrollHeight, clientHeight } = this.content;
    if (scrollTop + clientHeight < scrollHeight - scrollThreshold) return null;

    return (
      setState(this, { loading: true })
        // start loading
        .then(() => this._quizzesGen.next().value)
        // update state
        .then(fetchedQuizzes =>
          setState(this, ({ quizzes }) => ({
            quizzes: (quizzes || []).concat(fetchedQuizzes),
            loading: false
          }))
        )
        // try again
        .then(this._fetchMore)
    );
  };

  render() {
    const { classes } = this.props;
    const { quizzes, loading } = this.state;

    return (
      <Page
        appBarProps={{
          title: 'Explore',
          buttons: [
            <IconButton color="contrast" aria-label="Search">
              <Icon>search</Icon>
            </IconButton>,
            <IconButton color="contrast" aria-label="Sort by">
              <Icon>sort</Icon>
            </IconButton>,
            <IconButton color="contrast" aria-label="Refresh">
              <Icon>refresh</Icon>
            </IconButton>
          ]
        }}
        contentProps={{
          onScroll: this._fetchMore,
          ref: content => (this.content = content)
        }}>
        {quizzes && (
          <List className={classes.list}>
            {quizzes.map(quiz => <ExploreListItem key={quiz.id} {...quiz} />)}
          </List>
        )}

        {loading && (
          <CircularProgress
            className={quizzes ? classes.loadingList : classes.loading}
          />
        )}
      </Page>
    );
  }
}

export default withStyles(styles)(Explore);
