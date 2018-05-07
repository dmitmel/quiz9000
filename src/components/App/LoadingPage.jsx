import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import CircularProgress from 'material-ui/Progress/CircularProgress';

const styles = {
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const LoadingPage = ({ classes }) => (
  <CircularProgress className={classes.root} />
);

LoadingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPage);
