import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Icon from 'material-ui/Icon';

const NavLink = ({ icon, text, ...linkProps }) => (
  <ListItem button {...linkProps}>
    <ListItemIcon>
      <Icon>{icon}</Icon>
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavLink;
