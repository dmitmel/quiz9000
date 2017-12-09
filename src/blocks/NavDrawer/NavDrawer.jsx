import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import NavItem from './NavItem';

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

const repoURL = process.env.repoURL;
const bugsURL = process.env.bugsURL;

class NavDrawer extends Component {
  static width = 280;

  static propTypes = {
    open: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
  };

  static contextTypes = {
    closeNav: PropTypes.func.isRequired
  };

  render() {
    const { open, classes, theme } = this.props;
    const { closeNav } = this.context;

    const logoPath = theme.palette.type === 'dark' ? logoWhite : logoBlue;

    const navItems = (
      <div>
        <Toolbar>
          <img alt="logo" src={logoPath} className={classes.logo} />
          <Typography type="title" noWrap>
            {process.env.REACT_APP_NAME}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          <NavItem icon="library_books" text="Library" link="#/library" />
          <NavItem icon="apps" text="Explore" link="#/explore" />
        </List>
        <Divider />
        <List>
          <NavItem icon="settings" text="Settings" link="#/settings" />
          <NavItem icon="code" text="Source code" link={repoURL} />
          <NavItem icon="bug_report" text="Report a bug" link={bugsURL} />
        </List>
      </div>
    );

    return (
      <div>
        <Hidden mdUp>
          <Drawer
            type="temporary"
            anchor="left"
            open={open}
            onRequestClose={closeNav}
            ModalProps={{ keepMounted: true }}
            classes={{ paper: classes.drawerPaper }}>
            {navItems}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            type="permanent"
            open
            classes={{ paper: classes.drawerPaper }}>
            {navItems}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NavDrawer);
