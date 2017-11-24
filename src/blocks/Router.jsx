import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Router extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.instanceOf(RegExp).isRequired,
        render: PropTypes.func,
        redirect: PropTypes.string
      })
    ).isRequired
  };

  state = { path: this._getPath() };

  _getPath() {
    return window.location.hash.slice(1);
  }

  _onHashChange = () => {
    const path = this._getPath();
    this.setState({ path });
  };

  componentDidMount() {
    window.addEventListener('hashchange', this._onHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this._onHashChange);
  }

  render() {
    const currentPath = this.state.path;

    for (const { path, render, redirect } of this.props.routes) {
      const match = path.exec(currentPath);
      if (match) {
        if (redirect) {
          window.location.hash = `#${redirect}`;
          return null;
        }

        return render ? render({ match }) : null;
      }
    }

    return null;
  }
}
