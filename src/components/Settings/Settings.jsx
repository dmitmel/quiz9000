import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button/Button';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogActions from 'material-ui/Dialog/DialogActions';

const Settings = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Settings</DialogTitle>
    <DialogContent>
      <DialogContentText>Settings will be here.</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button color="primary" autoFocus onClick={onClose}>
        Save
      </Button>
    </DialogActions>
  </Dialog>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Settings;
