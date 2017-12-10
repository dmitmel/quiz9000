import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './resets.css';
import './animations.css';
import renderApp from './renderApp';

registerServiceWorker();

window.addEventListener('load', renderApp);
