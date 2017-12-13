import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};

NavLink.contextTypes = {
  closeNav: PropTypes.func.isRequired
};

export default function NavLink({ icon, text, link }, { closeNav }) {
  return (
    <ListItem button component="a" href={link} onClick={closeNav}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
