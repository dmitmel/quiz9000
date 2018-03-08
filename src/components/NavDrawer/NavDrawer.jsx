import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import NavItem from './NavItem';
import Settings from '../../containers/Settings';

import logoBlue from '../../img/logo/blue.svg';
import logoWhite from '../../img/logo/white.svg';

const logoSize = 2 / 3;

const styles = theme => ({
  drawerPaper: {
    width: NavDrawer.width,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  logo: {
    width: 56 * logoSize,
    marginLeft: -4,
    marginRight: theme.spacing.unit * 2.5,
    '@media (orientation: landscape)': {
      width: 48 * logoSize,
      marginRight: theme.spacing.unit * 3
    },
    [theme.breakpoints.up('sm')]: {
      width: 64 * logoSize,
      marginLeft: -12,
      marginRight: theme.spacing.unit * 2
    }
  }
});

NavDrawer.width = 280;

NavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  openSettings: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

function NavDrawer({ open, onClose, openSettings, classes, theme }) {
  const logoPath = theme.palette.type === 'dark' ? logoWhite : logoBlue;

  const navItems = (
    <div>
      <Toolbar>
        <img alt="logo" src={logoPath} className={classes.logo} />
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
          icon="apps"
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
}

export default withStyles(styles, { withTheme: true })(NavDrawer);
