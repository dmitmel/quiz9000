import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import withStyles from 'material-ui/styles/withStyles';
import IconButton from 'material-ui/IconButton/IconButton';
import Icon from 'material-ui/Icon/Icon';
import Menu from 'material-ui/Menu/Menu';

const styles = {
  root: {},
  button: {
    marginLeft: -8,
    marginRight: -16,
  },
  menu: {
    marginTop: -8,
    marginLeft: 8,
  },
};

class MainAppBarMenu extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { open, onOpen, onClose, children, classes } = this.props;

    return (
      <>
        <IconButton
          color="inherit"
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

        <Menu
          id={classes.root}
          anchorEl={this.button}
          open={open}
          onClick={onClose}
          onClose={onClose}
          className={classes.menu}>
          {children}
        </Menu>
      </>
    );
  }
}

export default compose(
  withState('open', 'setOpen', false),
  withHandlers({
    onOpen: ({ setOpen }) => () => setOpen(true),
    onClose: ({ setOpen }) => () => setOpen(false),
  }),
  withStyles(styles),
)(MainAppBarMenu);
