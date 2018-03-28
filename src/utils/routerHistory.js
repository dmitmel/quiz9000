import createHistory from 'history/createBrowserHistory';

const history = createHistory({ basename: process.env.PUBLIC_URL });

export default history;
