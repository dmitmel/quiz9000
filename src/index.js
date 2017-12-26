import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import './resets.css';
import renderApp from './renderApp';

registerServiceWorker();

window.addEventListener('load', renderApp);
