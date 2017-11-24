import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import deepOrange from 'material-ui/colors/deepOrange';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.scss';
import App from './blocks/App';

registerServiceWorker();

// Render only when all resources are loaded
window.addEventListener('load', () => {
  const theme = createMuiTheme({
    palette: {
      primary: indigo,
      secondary: deepOrange,
      type: 'light'
    }
  });

  const renderApp = Component => {
    render(
      <AppContainer>
        <MuiThemeProvider theme={theme}>
          <Component />
        </MuiThemeProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  };

  renderApp(App);
  if (module.hot) module.hot.accept('./blocks/App', () => renderApp(App));
});
