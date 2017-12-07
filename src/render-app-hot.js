import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './theme';
import App from './blocks/App';

export default function renderApp() {
  const render = () => {
    ReactDOM.render(
      <AppContainer>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  };

  render();
  module.hot.accept('./blocks/App', render);
}
