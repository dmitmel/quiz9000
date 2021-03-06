import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import MenuItem from 'material-ui/Menu/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import Icon from 'material-ui/Icon/Icon';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import Avatar from 'material-ui/Avatar/Avatar';
import Typography from 'material-ui/Typography/Typography';
import Divider from 'material-ui/Divider/Divider';
import Button from 'material-ui/Button/Button';
import Page, { PageContent } from '../Page';
import MainAppBar from '../../containers/MainAppBar';
import { MainAppBarMenu } from '../MainAppBar';

const styles = theme => ({
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  header: {
    display: 'flex',
    marginBottom: theme.spacing.unit * 2,
  },
  buttons: {
    display: 'flex',
    marginBottom: theme.spacing.unit * 2,
    justifyContent: 'flex-end',
  },
  button: {
    '&:not(:last-child)': {
      marginRight: theme.spacing.unit * 1.5,
    },
  },
  img: {
    width: 72,
    height: 72,
    marginRight: theme.spacing.unit * 2,
    borderRadius: 0,
  },
  description: {
    marginTop: theme.spacing.unit * 2,
  },
});

const QuizDetails = ({
  loading,
  data,
  isSaved,
  onRefresh,
  onSave,
  onRemove,
  classes,
}) => (
  <Page>
    <MainAppBar title="Quiz">
      <IconButton color="inherit" aria-label="Search">
        <Icon>search</Icon>
      </IconButton>
      <MainAppBarMenu>
        <MenuItem disabled={loading} onClick={onRefresh}>
          Refresh
        </MenuItem>
      </MainAppBarMenu>
    </MainAppBar>

    <PageContent>
      {loading && <CircularProgress className={classes.loading} />}

      {data && (
        <>
          <div className={classes.header}>
            <Avatar src={data.image} alt={data.name} className={classes.img} />
            <div className={classes.headerRight}>
              <Typography variant="title">{data.name}</Typography>
              <Typography variant="subheading">
                By {data.author ? data.author.name : 'Unknown author'}
              </Typography>
            </div>
          </div>

          <div className={classes.buttons}>
            {isSaved ? (
              <>
                <Button
                  key="remove"
                  variant="raised"
                  className={classes.button}
                  onClick={onRemove}>
                  Remove
                </Button>
                <Button
                  key="open"
                  variant="raised"
                  color="secondary"
                  className={classes.button}>
                  Open
                </Button>
              </>
            ) : (
              <Button
                key="save"
                variant="raised"
                color="secondary"
                className={classes.button}
                onClick={onSave}>
                Save
              </Button>
            )}
          </div>

          <Divider />
          <Typography variant="subheading" className={classes.description}>
            {data.description}
          </Typography>
        </>
      )}
    </PageContent>
  </Page>
);

QuizDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  isSaved: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuizDetails);
