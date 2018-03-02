import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = {
  root: {},
  button: {},
  item: {
    '&:focus': {
      outline: 'none'
    }
  }
};

class MainAppBarMenu extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        onClick: PropTypes.func
      }).isRequired
    ).isRequired,
    classes: PropTypes.object.isRequired
  };

  render() {
    const { open, onOpen, onClose, items, classes } = this.props;

    return (
      <>
        <IconButton
          color="contrast"
          className={classes.button}
          onClick={onOpen}
          buttonRef={button => {
            this.button = button;
          }}
          aria-label="Open menu"
          aria-owns={open ? classes.root : null}
          aria-haspopup="true">
          <Icon>more_vert</Icon>
        </IconButton>

        {items && (
          <Menu
            id={classes.root}
            anchorEl={this.button}
            open={open}
            onClose={onClose}>
            {items &&
              items.map(({ name, disabled, onClick }) => (
                <MenuItem
                  key={name}
                  disabled={disabled}
                  onClick={() => {
                    onClose();
                    if (onClick) onClick();
                  }}>
                  {name}
                </MenuItem>
              ))}
          </Menu>
        )}
      </>
    );
  }
}

export default compose(
  withState('open', 'setOpen', false),
  withHandlers({
    onOpen: ({ setOpen }) => () => setOpen(true),
    onClose: ({ setOpen }) => () => setOpen(false)
  }),
  withStyles(styles)
)(MainAppBarMenu);
