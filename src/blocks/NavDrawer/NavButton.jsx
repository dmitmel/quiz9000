import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

NavButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

NavButton.contextTypes = {
  closeNav: PropTypes.func.isRequired
};

export default function NavButton({ icon, text, onClick }, { closeNav }) {
  return (
    <ListItem
      button
      onClick={() => {
        onClick && onClick();
        closeNav();
      }}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
