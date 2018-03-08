const paths = require('./paths');
const appConfig = require('./app.config');

const envType = process.env.NODE_ENV || 'development';

// env variables for the DefinePlugin
const stringified = {};

function addEnvVar(key, value) {
  stringified[key] = JSON.stringify(value);
}

// add general env variables
addEnvVar('NODE_ENV', envType);
addEnvVar('PUBLIC_URL', paths.servedPath);

Object.keys(appConfig).forEach(key => {
  const value = appConfig[key];
  process.env[key] = value;
  addEnvVar(key, value);
});

module.exports = {
  stringified,
  type: envType
};
