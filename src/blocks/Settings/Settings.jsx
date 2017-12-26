import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';

export default class Settings extends React.Component {
  state = {
    open: false
  };

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <Dialog open={open} onClose={this.close}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <DialogContentText>Settings will be here.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.close}>Cancel</Button>
          <Button onClick={this.close} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
