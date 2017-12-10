import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import NavDrawer from '../NavDrawer';

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
  lastButton: {
    // width: 36,
    marginRight: -12
  }
});

MainAppBar.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.element),
  classes: PropTypes.object.isRequired
};

MainAppBar.contextTypes = {
  openNav: PropTypes.func.isRequired
};

function MainAppBar({ title, buttons, classes }, { openNav }) {
  if (buttons) {
    let lastButton = buttons[buttons.length - 1];
    lastButton = (
      <div key={-1} className={classes.lastButton}>
        {lastButton}
      </div>
    );

    buttons = buttons
      .slice(0, -1)
      .map((button, i) => <div key={i}>{button}</div>);
    buttons.push(lastButton);
  }

  return (
    <AppBar position="absolute" className={classes.root}>
      <Toolbar>
        <IconButton
          color="contrast"
          className={classes.navButton}
          onClick={openNav}
          aria-label="Menu">
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

        {buttons}

        {/* <IconButton
          color="contrast"
          className={classes.moreIcon}
          aria-label="More">
          <Icon>more_vert</Icon>
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(MainAppBar);
