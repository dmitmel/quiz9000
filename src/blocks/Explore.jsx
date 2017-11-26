import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import Page from './Page';
import Quiz from './Quiz';
import { database } from '../firebase';

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

const quizHeight = 68;
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

  _listRef = null;
  _fetchedRef = null;
  _quizzes = Math.ceil(window.innerHeight / quizHeight) + 1;
  _quizzesLength = 0;

  componentDidMount() {
    const quizzesRef = database.ref('quizzes');
    this._listRef = quizzesRef.child('list');

    quizzesRef
      .child('length')
      .on('value', snapshot => (this._quizzesLength = snapshot.val()));

    this._fetchQuizzes();
  }

  _fetchQuizzes() {
    if (this._fetchedRef) this._fetchedRef.off('value');

    this.setState({ loading: true });

    this._fetchedRef = this._listRef.limitToFirst(this._quizzes);
    this._fetchedRef.on('value', snapshot =>
      this.setState({ quizzes: snapshot.val(), loading: false })
    );
  }

  _checkListHeight = () => {
    if (this.state.loading) return;
    if (this._quizzes >= this._quizzesLength) return;

    const { scrollTop, scrollHeight, clientHeight } = this.content;
    if (scrollTop + clientHeight >= scrollHeight - scrollThreshold) {
      this._quizzes += quizzesPerPage;
      this._fetchQuizzes();
    }
  };

  render() {
    const { classes } = this.props;

    const { quizzes, loading } = this.state;

    return (
      <Page
        title="Explore"
        contentProps={{
          onScroll: this._checkListHeight,
          ref: content => (this.content = content)
        }}>
        {quizzes && (
          <List className={classes.list}>
            {quizzes.map((quiz, i) => <Quiz key={quiz.id} {...quiz} />)}
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
