import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import NavDrawer from '../../containers/NavDrawer';
import MainAppBar from '../../containers/MainAppBar';

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
  classes: PropTypes.object.isRequired
};

Page.defaultProps = {
  appBarProps: {}
};

function Page({ appBarProps, classes, children }) {
  return (
    <div className={classes.root}>
      <NavDrawer />
      <MainAppBar {...appBarProps} />
      <div className={classes.contentWrapper}>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
}

export default withStyles(styles)(Page);
