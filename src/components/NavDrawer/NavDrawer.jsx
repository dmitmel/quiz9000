import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from 'material-ui/styles/withStyles';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import Typography from 'material-ui/Typography/Typography';
import Drawer from 'material-ui/Drawer/Drawer';
import List from 'material-ui/List/List';
import Hidden from 'material-ui/Hidden/Hidden';
import Divider from 'material-ui/Divider/Divider';
import NavItem from './NavItem';
import Settings from '../../containers/Settings';

import logoBlue from '../../assets/logo/blue.svg';
import logoWhite from '../../assets/logo/white.svg';

const styles = theme => ({
  drawerPaper: {
    width: NavDrawer.width,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  logo: {
    width: 48,
    marginLeft: -12,
    marginRight: 20
  }
});

const width = 280;

const NavDrawer = ({ open, onClose, openSettings, classes, theme }) => {
  const navItems = (
    <div>
      <Toolbar>
        <img
          alt="logo"
          src={theme.palette.type === 'dark' ? logoWhite : logoBlue}
          className={classes.logo}
        />
        <Typography variant="title" noWrap>
          {process.env.APP_TITLE}
        </Typography>
      </Toolbar>
      <Divider />

      <List>
        <NavItem
          icon="library_books"
          text="Library"
          component={Link}
          to="/library"
          onClick={onClose}
        />
        <NavItem
          icon="explore"
          text="Explore"
          component={Link}
          to="/explore"
          onClick={onClose}
        />
      </List>
      <Divider />
      <List>
        <NavItem
          icon="settings"
          text="Settings"
          onClick={() => {
            onClose();
            openSettings();
          }}
        />
        <NavItem
          icon="code"
          text="Source code"
          component="a"
          href={process.env.APP_REPOSITORY}
          onClick={onClose}
        />
        <NavItem
          icon="bug_report"
          text="Report a bug"
          component="a"
          href={process.env.APP_BUGS}
          onClick={onClose}
        />
      </List>
    </div>
  );

  return (
    <>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          classes={{ paper: classes.drawerPaper }}>
          {navItems}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{ paper: classes.drawerPaper }}>
          {navItems}
        </Drawer>
      </Hidden>

      <Settings />
    </>
  );
};

NavDrawer.width = width;

NavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  openSettings: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(NavDrawer);
