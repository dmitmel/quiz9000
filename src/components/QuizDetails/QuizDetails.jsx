import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { CircularProgress } from 'material-ui/Progress';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Page from '../Page';

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
  onRefresh: PropTypes.func,
  classes: PropTypes.object.isRequired
};

function QuizDetails({ loading, data, onRefresh, classes }) {
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
        <div>
          <div className={classes.header}>
            <Avatar src={data.image} alt={data.name} className={classes.img} />
            <div className={classes.headerRight}>
              <Typography type="title">{data.name}</Typography>
              <Typography type="subheading">
                By {data.author ? data.author.name : 'Unknown author'}
              </Typography>
            </div>
          </div>
          <Divider />
          <Typography type="subheading" className={classes.description}>
            {data.description}
          </Typography>
        </div>
      )}
    </Page>
  );
}

export default withStyles(styles)(QuizDetails);
