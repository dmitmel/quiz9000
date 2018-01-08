import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

@withStyles(styles)
export default class MainAppBarMenu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        onClick: PropTypes.func
      })
    ).isRequired,
    classes: PropTypes.object.isRequired
  };

  state = {
    open: false
  };

  _open = () => {
    this.setState({ open: true });
  };

  _close = () => {
    this.setState({ open: false });
  };

  render() {
    const { items, classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <IconButton
          color="contrast"
          className={classes.button}
          onClick={this._open}
          buttonRef={button => (this.button = button)}
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
            onClose={this._close}>
            {items &&
              items.map(({ name, disabled, onClick }) => (
                <MenuItem
                  key={name}
                  disabled={disabled}
                  onClick={() => {
                    this._close();
                    onClick && onClick();
                  }}>
                  {name}
                </MenuItem>
              ))}
          </Menu>
        )}
      </div>
    );
  }
}
