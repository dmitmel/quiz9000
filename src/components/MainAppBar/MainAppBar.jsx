import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import Typography from 'material-ui/Typography/Typography';
import IconButton from 'material-ui/IconButton/IconButton';
import Icon from 'material-ui/Icon/Icon';
import NavDrawer from '../NavDrawer';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      // appBar has `left: auto` so it'll stick to right
      width: `calc(100% - ${NavDrawer.width}px)`,
    },
  },
  navButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    // fill all available space
    flex: 1,
  },
});

const MainAppBar = ({ openNav, title, children, classes }) => (
  <AppBar position="absolute" className={classes.root}>
    <Toolbar>
      <IconButton
        color="inherit"
        className={classes.navButton}
        onClick={openNav}
        aria-label="Open nav">
        <Icon>menu</Icon>
      </IconButton>

      {title && (
        <Typography
          variant="title"
          color="inherit"
          noWrap
          className={classes.title}>
          {title}
        </Typography>
      )}

      {children}
    </Toolbar>
  </AppBar>
);

MainAppBar.propTypes = {
  openNav: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainAppBar);
