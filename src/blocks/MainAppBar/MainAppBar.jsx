import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import NavDrawer from '../NavDrawer';
import MainAppBarMenu from './MainAppBarMenu';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      // appBar has `left: auto` so it'll stick to right
      width: `calc(100% - ${NavDrawer.width}px)`
    }
  },
  navButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  title: {
    // fill all available space
    flex: 1
  },
  menuButton: {
    width: 36,
    marginRight: -12
  }
});

MainAppBar.propTypes = {
  openNav: PropTypes.func,
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.element),
  menuItems: PropTypes.array,
  classes: PropTypes.object.isRequired
};

function MainAppBar({ openNav, title, buttons, menuItems, classes }) {
  return (
    <AppBar position="absolute" className={classes.root}>
      <Toolbar>
        <IconButton
          color="contrast"
          className={classes.navButton}
          onClick={openNav}
          aria-label="Open nav">
          <Icon>menu</Icon>
        </IconButton>

        {title && (
          <Typography
            type="title"
            color="inherit"
            noWrap
            className={classes.title}>
            {title}
          </Typography>
        )}

        {buttons && buttons.map((button, i) => <div key={i}>{button}</div>)}

        {menuItems && (
          <MainAppBarMenu
            items={menuItems}
            classes={{ button: classes.menuButton }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(MainAppBar);
