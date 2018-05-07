import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography/Typography';
// eslint-disable-next-line
import Avatar from 'material-ui/Avatar/Avatar';
import Icon from 'material-ui/Icon/Icon';

import logoBlue from '../../assets/logo/blue.svg';
import logoWhite from '../../assets/logo/white.svg';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    verticalAlign: 'top',
  },
  images: {
    display: 'flex',
    marginBottom: theme.spacing.unit * 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 64,
    height: 64,
  },
  noPhotoIcon: {
    color: theme.palette.text.secondary,
    fontSize: 64,
  },
});

// eslint-disable-next-line
const CurrentUser = ({ photoURL, displayName, email, classes, theme }) => (
  <div className={classes.root}>
    <div className={classes.images}>
      {photoURL ? (
        <Avatar src={photoURL} alt="avatar" className={classes.image} />
      ) : (
        <Icon className={classes.noPhotoIcon}>account_circle</Icon>
      )}

      <img
        src={theme.palette.type === 'dark' ? logoWhite : logoBlue}
        alt="logo"
        className={classes.image}
      />
    </div>

    {displayName && <Typography variant="body2">{displayName}</Typography>}
    {email && <Typography variant="body1">{email}</Typography>}
  </div>
);

CurrentUser.propTypes = {
  photoURL: PropTypes.string,
  displayName: PropTypes.string,
  email: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CurrentUser);
