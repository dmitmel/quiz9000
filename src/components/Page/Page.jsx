import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import NavDrawer from '../../containers/NavDrawer';

const styles = {
  root: {
    display: 'flex',
    height: '100%'
  },
  contentWrapper: {
    width: '100%'
  }
};

const Page = ({ classes, children }) => (
  <div className={classes.root}>
    <NavDrawer />
    {children}
  </div>
);

Page.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Page);
