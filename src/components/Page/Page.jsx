import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import NavDrawer from '../../containers/NavDrawer';

const styles = {
  root: {
    display: 'flex'
  },
  contentWrapper: {
    width: '100%'
  }
};

Page.propTypes = {
  classes: PropTypes.object.isRequired
};

function Page({ classes, children }) {
  return (
    <div className={classes.root}>
      <NavDrawer />
      {children}
    </div>
  );
}

export default withStyles(styles)(Page);
