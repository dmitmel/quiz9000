import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'blueimp-md5';
import withStyles from 'material-ui/styles/withStyles';
import Button from 'material-ui/Button/Button';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  wrapper: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      bottom: theme.spacing.unit * 3,
      right: theme.spacing.unit * 3,
    },
  },
  input: {
    display: 'none',
  },
});

const readFile = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });

class UploadQuiz extends React.Component {
  static propTypes = {
    addQuiz: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  onButtonClick = () => this.input.click();

  onInputChange = ({ target }) => {
    const [file] = target.files;
    const { addQuiz } = this.props;
    readFile(file).then(json => {
      const data = JSON.parse(json);
      const id = md5(json).slice(0, 8);
      addQuiz(id, data);
    }, console.error);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Button
          variant="fab"
          color="secondary"
          onClick={this.onButtonClick}
          aria-label="upload quiz">
          <Icon>file_upload</Icon>
        </Button>

        <input
          type="file"
          accept="application/json"
          onChange={this.onInputChange}
          className={classes.input}
          ref={input => {
            this.input = input;
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(UploadQuiz);
