import React, { Component } from 'react';
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
import Settings from '../Settings';

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

@withStyles(styles, { withTheme: true })
export default class NavDrawer extends Component {
  static width = 280;

  static propTypes = {
    selfRef: PropTypes.func,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
  };

  state = { open: false };

  componentDidMount() {
    const { selfRef } = this.props;
    selfRef && selfRef(this);
  }

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  _openSettings = () => {
    this.close();
    this._settings.open();
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

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
          <NavItem
            icon="library_books"
            text="Library"
            component={Link}
            to="/library"
            onClick={this.close}
          />
          <NavItem
            icon="apps"
            text="Explore"
            component={Link}
            to="/explore"
            onClick={this.close}
          />
        </List>
        <Divider />
        <List>
          <NavItem
            icon="settings"
            text="Settings"
            onClick={this._openSettings}
          />
          <NavItem
            icon="code"
            text="Source code"
            component="a"
            href={process.env.REACT_APP_REPO}
            onClick={this.close}
          />
          <NavItem
            icon="bug_report"
            text="Report a bug"
            component="a"
            href={process.env.REACT_APP_BUGS}
            onClick={this.close}
          />
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
            onClose={this.close}
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

        <Settings ref={settings => (this._settings = settings)} />
      </div>
    );
  }
}
