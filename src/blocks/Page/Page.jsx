import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import NavDrawer from '../NavDrawer';
import MainAppBar from '../MainAppBar';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  contentWrapper: {
    width: '100%'
  },
  content: {
    height: 'calc(100vh - 56px)',
    marginTop: 56,
    padding: theme.spacing.unit * 2,
    position: 'relative',
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
    appBarProps: PropTypes.object,
    contentProps: PropTypes.object,
    classes: PropTypes.object.isRequired
  };

  static defaultProps = {
    appBarProps: {},
    contentProps: {}
  };

  _openNav = () => {
    this._nav && this._nav.open();
  };

  render() {
    const { appBarProps, contentProps, classes, children } = this.props;

    return (
      <div className={classes.root}>
        <NavDrawer selfRef={nav => (this._nav = nav)} />
        <MainAppBar openNav={this._openNav} {...appBarProps} />
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
