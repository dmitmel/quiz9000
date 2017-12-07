import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './theme';
import App from './blocks/App';

export default function renderApp() {
  render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById('root')
  );
}
