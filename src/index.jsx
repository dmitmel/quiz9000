import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider } from 'material-ui/styles';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import './resets.css';
import theme from './theme';
import renderApp from './renderApp.prod';
import App from './components/App';

registerServiceWorker();

window.addEventListener('load', () =>
  renderApp(
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </AppContainer>
  )
);
