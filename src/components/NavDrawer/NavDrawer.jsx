import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from 'material-ui/styles/withStyles';
import Drawer from 'material-ui/Drawer/Drawer';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Icon from 'material-ui/Icon';
import Hidden from 'material-ui/Hidden/Hidden';
import Divider from 'material-ui/Divider/Divider';
import CurrentUser from './CurrentUser';
import Settings from '../../containers/Settings';
import { auth } from '../../firebase';

const styles = theme => ({
  drawerPaper: {
    width: NavDrawer.width,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
});

const width = 280;

const NavDrawer = ({ open, onClose, openSettings, user, classes }) => {
  // eslint-disable-next-line react/prop-types
  const NavItem = ({ icon, text, onClick, ...linkProps }) => (
    <ListItem
      button
      onClick={e => {
        onClose(e);
        if (onClick) onClick(e);
      }}
      {...linkProps}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );

  const navItems = (
    <div>
      {user && (
        <>
          <CurrentUser
            photoURL={user.photoURL}
            displayName={user.displayName}
            email={user.email}
          />
          <Divider />
        </>
      )}

      <List>
        <NavItem
          icon="library_books"
          text="Library"
          component={Link}
          to="/library"
        />

        <NavItem icon="explore" text="Explore" component={Link} to="/explore" />
      </List>
      <Divider />
      <List>
        <NavItem icon="settings" text="Settings" onClick={openSettings} />

        <NavItem
          icon="code"
          text="Source code"
          component="a"
          href={process.env.APP_REPOSITORY}
        />
        <NavItem
          icon="bug_report"
          text="Report a bug"
          component="a"
          href={process.env.APP_BUGS}
        />
      </List>
      <Divider />
      <List>
        <NavItem
          icon="exit_to_app"
          text="Sign out"
          component="a"
          href={process.env.APP_BUGS}
          onClick={e => {
            e.preventDefault();
            auth.signOut();
          }}
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
  user: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);
