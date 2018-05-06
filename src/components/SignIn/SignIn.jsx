/* eslint-disable import/no-named-as-default-member */

import React from 'react';
import PropTypes from 'prop-types';
import { FirebaseAuth } from 'react-firebaseui';
import withStyles from 'material-ui/styles/withStyles';
import firebase, { auth } from '../../db/firebase';

const styles = {
  signInForm: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

const uiConfig = {
  // Popup sign-in flow rather than redirect flow
  signInFlow: 'popup',
  // We will display email and Google as auth providers
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccess: () => false
  }
};

const SignIn = ({ classes }) => (
  <FirebaseAuth
    firebaseAuth={auth}
    uiConfig={uiConfig}
    className={classes.signInForm}
  />
);

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
