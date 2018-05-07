/* istanbul ignore file */

import { auth } from './firebase';
import * as actions from '../actions/creators';
import AuthStatus from '../utils/AuthStatus';

export function connectStateObserver(dispatch) {
  auth.onAuthStateChanged(
    user =>
      dispatch(
        actions.changeAuthState(
          user ? AuthStatus.SIGNED_IN : AuthStatus.SIGNED_OUT,
          user,
        ),
      ),
    () => dispatch(actions.changeAuthState(AuthStatus.ERROR)),
  );
}
