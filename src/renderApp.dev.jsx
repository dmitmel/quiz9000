import ReactDOM from 'react-dom';

export default function renderApp(element) {
  const render = () =>
    // eslint-disable-next-line react/no-render-return-value
    ReactDOM.render(element, document.getElementById('root'));

  render();
  module.hot.accept('./components/App', render);
}
