import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import NavDrawer from '../NavDrawer';
import AppBar from '../MainAppBar';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  contentWrapper: {
    width: '100%',
    position: 'relative'
  },
  content: {
    height: 'calc(100vh - 56px)',
    marginTop: 56,
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.default,
    overflow: 'auto',
    '@media (orientation: landscape)': {
      height: 'calc(100vh - 48px)',
      marginTop: 48
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 64px)',
      marginTop: 64,
      padding: theme.spacing.unit * 3
    }
  }
});

class Page extends Component {
  static propTypes = {
    title: PropTypes.string,
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
    const { title, classes, children, contentProps } = this.props;

    return (
      <div className={classes.root}>
        <NavDrawer open={navOpen} />
        <AppBar title={title} />
        <div className={classes.contentWrapper}>
          <main className={classes.content} {...contentProps}>
            {children}
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Page);
