import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default function NavLink({ icon, text, link, onClick }) {
  return (
    <ListItem button component="a" href={link} onClick={onClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
