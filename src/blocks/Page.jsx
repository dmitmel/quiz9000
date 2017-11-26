import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import NavDrawer from './NavDrawer';
import AppBar from './MainAppBar';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  content: {
    width: '100%',
    height: 'calc(100vh - 56px)',
    marginTop: 56,
    padding: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.default,
    overflow: 'auto',
    '@media (orientation: landscape)': {
      height: 'calc(100vh - 48px)',
      marginTop: 48
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 64px)',
      marginTop: 64
    }
  }
});

class Page extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    search: PropTypes.func,
    classes: PropTypes.object.isRequired
  };

  static childContextTypes = {
    openNav: PropTypes.func.isRequired,
    closeNav: PropTypes.func.isRequired
  };

  state = { navOpen: false };

  openNav = () => {
    this.setState({ navOpen: true });
  };

  closeNav = () => {
    this.setState({ navOpen: false });
  };

  getChildContext() {
    return { openNav: this.openNav, closeNav: this.closeNav };
  }

  render() {
    const { navOpen } = this.state;
    const { title, classes, children } = this.props;

    return (
      <div className={classes.root}>
        <NavDrawer open={navOpen} />
        <AppBar title={title} />
        <main className={classes.content}>{children}</main>
      </div>
    );
  }
}

export default withStyles(styles)(Page);
