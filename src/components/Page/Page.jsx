import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import NavDrawer from '../NavDrawer';
import MainAppBar from '../MainAppBar';
import { NavDrawerActions } from '../../actions';

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

Page.propTypes = {
  appBarProps: PropTypes.object,
  contentProps: PropTypes.object,
  openNav: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

Page.defaultProps = {
  appBarProps: {},
  contentProps: {}
};

function Page({ appBarProps, contentProps, openNav, classes, children }) {
  return (
    <div className={classes.root}>
      <NavDrawer />
      <MainAppBar openNav={openNav} {...appBarProps} />
      <div className={classes.contentWrapper}>
        <main className={classes.content} {...contentProps}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default compose(
  connect(null, dispatch => ({
    openNav: () => dispatch(NavDrawerActions.open())
  })),
  withStyles(styles)
)(Page);
