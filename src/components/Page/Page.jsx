import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import NavDrawer from '../../containers/NavDrawer';

const styles = {
  root: {
    display: 'flex',
    height: '100%',
    animation: 'pageTransition 0.3s linear',
  },
  contentWrapper: {
    width: '100%',
  },

  '@keyframes pageTransition': {
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
};

const Page = ({ classes, children }) => (
  <div className={classes.root}>
    <NavDrawer />
    {children}
  </div>
);

Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page);
