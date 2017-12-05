import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Page from './Page';
import { database } from '../firebase';

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

class QuizDetails extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
  };

  state = {
    quiz: null,
    loading: false
  };

  componentDidMount() {
    this._fetchQuiz();
  }

  _fetchQuiz() {
    const id = parseInt(this.props.id, 10);

    this.setState({ loading: true });

    database
      .ref('/quizzes/list')
      .orderByChild('id')
      .equalTo(id)
      .limitToFirst(1)
      .once('child_added', snapshot =>
        this.setState({ quiz: snapshot.val(), loading: false })
      );
  }

  render() {
    const { classes } = this.props;
    const { quiz, loading } = this.state;

    return (
      <Page title={quiz && quiz.name}>
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
                  {quiz.author || 'Unknown author'}
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

export default withStyles(styles)(QuizDetails);
