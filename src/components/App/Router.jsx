import { Component } from 'react';
import PropTypes from 'prop-types';

function getPath() {
  return window.location.hash.slice(1);
}

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

  state = { path: getPath() };

  componentDidMount() {
    window.addEventListener('hashchange', this._onHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this._onHashChange);
  }

  _onHashChange = () => {
    const path = getPath();
    this.setState({ path });
  };

  render() {
    const { routes } = this.props;
    const currentPath = this.state.path;

    for (let i = 0; i < routes.length; i++) {
      const { path, render, redirect } = routes[i];

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
