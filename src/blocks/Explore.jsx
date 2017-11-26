import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import Page from './Page';
import Quiz from './Quiz';
import { database } from '../firebase';

const styles = theme => ({
  root: {
    position: 'relative'
  },
  list: {
    background: theme.palette.background.paper
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  loadingAfterList: {
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

  _pages = 1;
  _quizzesLength = 0;
  _fetchedRef = null;

  componentDidMount() {
    this._quizzesRef = database.ref('quizzes');
    this._quizzesRef.on('value', snapshot => {
      this._quizzesLength = snapshot.numChildren();
    });

    this._fetchCurrent();
  }

  _fetchCurrent() {
    // clean up prev ref
    if (this._fetchedRef) this._fetchedRef.off('value');

    this.setState({ loading: true });

    this._fetchedRef = this._quizzesRef.limitToFirst(
      quizzesPerPage * this._pages
    );
    this._fetchedRef.on('value', snapshot =>
      this.setState({ quizzes: snapshot.val(), loading: false })
    );
  }

  _checkListHeight = () => {
    if (this.state.loading) return;
    if (this._pages * quizzesPerPage >= this._quizzesLength) return;

    const { scrollTop, scrollHeight, clientHeight } = this.content;
    if (scrollTop + clientHeight >= scrollHeight - scrollThreshold) {
      this._pages += 1;
      this._fetchCurrent();
    }
  };

  render() {
    const { classes } = this.props;

    const { quizzes, loading } = this.state;

    return (
      <Page
        title="Explore"
        className={classes.root}
        contentProps={{
          onScroll: this._checkListHeight,
          ref: content => (this.content = content)
        }}>
        {quizzes && (
          <List className={classes.list}>
            {quizzes.map((quiz, i) => <Quiz key={i} {...quiz} />)}
          </List>
        )}

        {loading && (
          <CircularProgress
            className={quizzes ? classes.loadingAfterList : classes.loading}
          />
        )}
      </Page>
    );
  }
}

export default withStyles(styles)(Explore);
