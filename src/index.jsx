import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import './resets.css';
import App from './components/App';
import theme from './theme';
import store from './store';

registerServiceWorker();

window.addEventListener('load', () => {
  ReactDOM.render(
    <ReduxStoreProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ReduxStoreProvider>,
    document.getElementById('root')
  );
});
