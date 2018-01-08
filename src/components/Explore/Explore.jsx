import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import Page from '../Page';
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

@withStyles(styles)
export default class Explore extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    quizzes: PropTypes.array.isRequired,
    fetchMore: PropTypes.func.isRequired,
    onRefresh: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
  };

  componentDidMount() {
    this._fetchMore();
  }

  _fetchingMore = false;

  _fetchMore = () => {
    if (this._fetchingMore) return;
    this._fetchingMore = true;

    const { fetchMore } = this.props;
    fetchMore(quizzesPerPage).then(() => (this._fetchingMore = false));
  };

  render() {
    const { loading, quizzes, onRefresh, classes } = this.props;

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
          <div>
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
              onClick={this._fetchMore}>
              More...
              {loading && renderProgress(36)}
            </Button>
          </div>
        ) : (
          loading && renderProgress(64)
        )}
      </Page>
    );
  }
}
