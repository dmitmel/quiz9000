const paths = require('./paths');
// eslint-disable-next-line import/no-dynamic-require
const packageJson = require(paths.appPackageJson);

module.exports = {
  PUBLIC_URL: paths.servedPath,
  APP_TITLE: 'Quiz9000',
  APP_THEME_COLOR: '#3f51b5',
  APP_REPOSITORY: packageJson.repository,
  APP_BUGS: packageJson.bugs
};
