import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { CircularProgress } from 'material-ui/Progress';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Page from '../../containers/Page';

const styles = theme => ({
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  header: {
    display: 'flex',
    marginBottom: theme.spacing.unit * 2
  },
  buttons: {
    display: 'flex',
    marginBottom: theme.spacing.unit * 2,
    justifyContent: 'flex-end'
  },
  button: {
    '&:not(:last-child)': {
      marginRight: theme.spacing.unit * 1.5
    }
  },
  img: {
    width: 72,
    height: 72,
    marginRight: theme.spacing.unit * 2,
    borderRadius: 0
  },
  description: {
    marginTop: theme.spacing.unit * 2
  }
});

QuizDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  isSaved: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

function QuizDetails({
  loading,
  data,
  isSaved,
  onRefresh,
  onSave,
  onRemove,
  classes
}) {
  const appBarProps = {
    title: 'Quiz',
    buttons: [
      <IconButton color="contrast" aria-label="Search">
        <Icon>search</Icon>
      </IconButton>
    ],
    menuItems: [
      {
        name: 'Refresh',
        disabled: loading,
        onClick: onRefresh
      }
    ]
  };

  return (
    <Page appBarProps={appBarProps}>
      {loading && <CircularProgress className={classes.loading} />}

      {data && (
        <>
          <div className={classes.header}>
            <Avatar src={data.image} alt={data.name} className={classes.img} />
            <div className={classes.headerRight}>
              <Typography type="title">{data.name}</Typography>
              <Typography type="subheading">
                By {data.author ? data.author.name : 'Unknown author'}
              </Typography>
            </div>
          </div>

          <div className={classes.buttons}>
            {isSaved ? (
              <>
                <Button
                  key="remove"
                  raised
                  className={classes.button}
                  onClick={onRemove}>
                  Remove
                </Button>
                <Button
                  key="open"
                  raised
                  color="accent"
                  className={classes.button}>
                  Open
                </Button>
              </>
            ) : (
              <Button
                key="save"
                raised
                color="accent"
                className={classes.button}
                onClick={onSave}>
                Save
              </Button>
            )}
          </div>

          <Divider />
          <Typography type="subheading" className={classes.description}>
            {data.description}
          </Typography>
        </>
      )}
    </Page>
  );
}

export default withStyles(styles)(QuizDetails);
