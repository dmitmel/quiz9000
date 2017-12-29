import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import QuizDetails from '../components/QuizDetails';

@connect(
  ({ quizzes }) => ({ quizzes }),
  dispatch => ({ fetchQuiz: id => dispatch(actions.fetchQuiz(id)) })
)
export default class QuizDetailsContainer extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    quizzes: PropTypes.objectOf(
      PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        data: PropTypes.object
      })
    ).isRequired,
    fetchQuiz: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { id } = this.props;
    this._fetchQuiz(id);
  }

  componentWillReceiveProps({ id: nextId }) {
    const { id } = this.props;
    if (nextId !== id) this._fetchQuiz(nextId);
  }

  _fetchQuiz(id, force) {
    const { fetchQuiz } = this.props;
    const { data, loading } = this._getQuiz(id);
    if ((force || !data) && !loading) fetchQuiz(id);
  }

  _getQuiz(id) {
    const { quizzes } = this.props;
    return quizzes[id] || { loading: false, data: null };
  }

  render() {
    const { id } = this.props;
    const { loading, data } = this._getQuiz(id);
    return (
      <QuizDetails
        loading={loading}
        data={data}
        onRefresh={() => this._fetchQuiz(id, true)}
      />
    );
  }
}
