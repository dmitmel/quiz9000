import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './resets.css';
import renderApp from './render-app';

registerServiceWorker();

window.addEventListener('load', renderApp);
