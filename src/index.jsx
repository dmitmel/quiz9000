import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import './resets.css';
import theme from './theme';
import renderApp from './renderApp.prod';
import store from './store';
import App from './components/App';

registerServiceWorker();

window.addEventListener('load', () =>
  renderApp(
    <AppContainer>
      <ReduxStoreProvider store={store}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </ReduxStoreProvider>
    </AppContainer>
  )
);
