import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { CircularProgress } from 'material-ui/Progress';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Page from '../Page';
import { quizzes as quizzesDB } from '../../db';
import setState from '../../utils/setState';

const styles = theme => ({
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  header: {
    display: 'flex',
    marginBottom: theme.spacing.unit * 2
  },
  img: {
    width: 72,
    height: 72,
    marginRight: theme.spacing.unit * 2,
    borderRadius: 0
  },
  description: {
    marginTop: theme.spacing.unit * 2
  }
});

@withStyles(styles)
export default class QuizDetails extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };

  state = {
    quiz: null,
    loading: false
  };

  componentDidMount() {
    this._fetchQuiz();
  }

  _fetchQuiz = () => {
    if (this.state.loading) return null;

    const { match } = this.props;
    const id = parseInt(match.params.id, 10);

    return setState(this, { loading: true })
      .then(() => quizzesDB.findQuizBy('id', id))
      .then(quiz => setState(this, { quiz, loading: false }));
  };

  _refresh = () => {
    if (this.state.loading) return null;

    return setState(this, { quiz: null }).then(this._fetchQuiz);
  };

  render() {
    const { classes } = this.props;
    const { quiz, loading } = this.state;

    const appBarProps = {
      title: 'Quiz',
      buttons: [
        <IconButton color="contrast" aria-label="Search">
          <Icon>search</Icon>
        </IconButton>
      ],
      menuItems: [
        {
          name: 'Refresh',
          disabled: loading,
          onClick: this._refresh
        }
      ]
    };

    return (
      <Page appBarProps={appBarProps}>
        {loading && <CircularProgress className={classes.loading} />}

        {quiz && (
          <div>
            <div className={classes.header}>
              <Avatar
                src={quiz.image}
                alt={quiz.name}
                className={classes.img}
              />
              <div className={classes.headerRight}>
                <Typography type="title">{quiz.name}</Typography>
                <Typography type="subheading">
                  {quiz.author ? quiz.author.name : 'Unknown author'}
                </Typography>
              </div>
            </div>
            <Divider />
            <Typography type="subheading" className={classes.description}>
              {quiz.description}
            </Typography>
          </div>
        )}
      </Page>
    );
  }
}
