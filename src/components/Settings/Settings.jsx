import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import * as actions from '../../actions';

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

function Settings({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <DialogContentText>Settings will be here.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose} color="primary" autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect(
  store => ({ open: store.Settings.open }),
  dispatch => ({ onClose: () => dispatch(actions.closeSettings()) })
)(Settings);
