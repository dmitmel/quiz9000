import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import { styles as getAvatarStyles } from 'material-ui/Avatar/Avatar';
import { styles as getListItemStyles } from 'material-ui/List/ListItem';
import Page from '../Page';
import ExploreListItem from './ExploreListItem';
import database, { quizzes as quizzesDB } from '../../db';

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
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
  };

  state = {
    quizzes: null,
    loading: false
  };

  _quizzesLength = 0;

  componentDidMount() {
    this._quizzesGen = quizzesDB.quizzesGenerator();
    this._quizzesGen.next();

    // get length of the list without downloading it
    database.ref('/quizzes/length').once('value', snapshot => {
      this._quizzesLength = snapshot.val();
      this._fetchFirstPage();
    });
  }

  _fetchFirstPage() {
    const quizHeight = this._calcQuizHeight();
    const count =
      Math.ceil(window.innerHeight / quizHeight) +
      // fetch one more to ensure that user can scroll
      1;
    this._fetchQuizzes(count);
  }

  _calcQuizHeight() {
    const { theme } = this.props;
    const avatarStyles = getAvatarStyles(theme);
    const listItemStyles = getListItemStyles(theme);
    return (
      avatarStyles.root.height +
      listItemStyles.default.paddingTop +
      listItemStyles.default.paddingBottom
    );
  }

  _fetchQuizzes(count) {
    if (this.state.loading) return;

    const currentQuizzes = this.state.quizzes || [];
    if (currentQuizzes.length >= this._quizzesLength) return;

    // start loading
    this.setState({ loading: true }, () =>
      this._quizzesGen.next(count).value.then(fetchedQuizzes =>
        // update state
        this.setState(({ quizzes }) => ({
          quizzes: (quizzes || []).concat(fetchedQuizzes),
          loading: false
        }))
      )
    );
  }

  _checkListHeight = () => {
    const { scrollTop, scrollHeight, clientHeight } = this.content;
    if (scrollTop + clientHeight >= scrollHeight - scrollThreshold) {
      this._fetchQuizzes(quizzesPerPage);
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

export default withStyles(styles, { withTheme: true })(Explore);
