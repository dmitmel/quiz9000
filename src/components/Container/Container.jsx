import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import NavDrawer from '../NavDrawer';

const navWidth = NavDrawer.width;
const styles = ({ breakpoints }) => ({
  container: {
    margin: '0 auto',
    [breakpoints.up('sm')]: { maxWidth: breakpoints.values.sm },
    [breakpoints.up('md')]: { maxWidth: breakpoints.values.md - navWidth },
    [breakpoints.up('lg')]: { maxWidth: breakpoints.values.lg - navWidth },
    [breakpoints.up('xl')]: { maxWidth: breakpoints.values.xl - navWidth }
  }
});

const Container = ({ children, classes }) => (
  <div className={classes.container}>{children}</div>
);

Container.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Container);
