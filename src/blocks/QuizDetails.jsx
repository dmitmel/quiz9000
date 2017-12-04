import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Page from './Page';
import { database } from '../firebase';

const styles = theme => ({
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
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
      <Page>
        <pre>{JSON.stringify(quiz, null, 2)}</pre>

        {loading && <CircularProgress className={classes.loading} />}
      </Page>
    );
  }
}

export default withStyles(styles)(QuizDetails);
