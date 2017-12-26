import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Menu from 'material-ui/Menu';

const styles = {
  button: {},
  item: {
    '&:focus': {
      outline: 'none'
    }
  }
};

let menuCounter = 0;

class MainAppBarMenu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.element),
    classes: PropTypes.object.isRequired
  };

  state = {
    open: false,
    button: null
  };

  _menuID = `MainAppBarMenu-${menuCounter++}`;

  _open = e => {
    this.setState({ open: true, button: e.currentTarget });
  };

  _close = () => {
    this.setState({ open: false });
  };

  render() {
    const { items, classes } = this.props;
    const { open, button } = this.state;

    return (
      <div>
        <IconButton
          color="contrast"
          className={classes.button}
          onClick={this._open}
          aria-label="Open menu"
          aria-owns={open ? this._menuID : null}
          aria-haspopup="true">
          <Icon>more_vert</Icon>
        </IconButton>

        {items && (
          <Menu
            id={this._menuID}
            anchorEl={button}
            open={open}
            onRequestClose={this._close}>
            {items &&
              items.map((item, i) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div key={i} className={classes.item} onClick={this._close}>
                  {item}
                </div>
              ))}
          </Menu>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(MainAppBarMenu);
