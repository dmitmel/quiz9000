import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import { styles as getAvatarStyles } from 'material-ui/Avatar/Avatar';
import { styles as getListItemStyles } from 'material-ui/List/ListItem';
import Page from '../Page';
import ExploreListItem from './ExploreListItem';
import { database } from '../../firebase';

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
    const quizzesRef = database.ref('/quizzes');

    // TODO: add sorting options
    // get ref to the whole list
    this._listRef = quizzesRef.child('/list').orderByKey();
    this._nextRef = this._listRef;
    // get length of the list without downloading it
    quizzesRef.child('/length').once('value', snapshot => {
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
    this.setState({ loading: true }, () => {
      const ref = this._nextRef.limitToFirst(
        count + /* fetch one more to get next key */ 1
      );

      ref.once('value', snapshot => {
        const fetchedQuizzes = [];

        // read fetched quizzes
        let i = 0;
        snapshot.forEach(quizRef => {
          if (i < count) fetchedQuizzes.push(quizRef.val());
          else
            // create ref to next page
            this._nextRef = this._listRef.startAt(quizRef.key);
          i++;
        });

        // update state
        this.setState(({ quizzes }) => ({
          quizzes: (quizzes || []).concat(fetchedQuizzes),
          loading: false
        }));
      });
    });
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
