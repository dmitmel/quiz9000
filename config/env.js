const fs = require('fs');
const dotenv = require('dotenv');
const paths = require('./paths');

const envType = process.env.NODE_ENV || 'development';

// Loads env file with given name suffix. Won't overwrite any previously
// declared settings.
function loadEnvFile(fileSuffix) {
  // https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
  let filePath = paths.dotenv;
  if (fileSuffix) filePath += fileSuffix;
  if (fs.existsSync(filePath)) dotenv.config({ filePath });
}

// Env files are loaded in the following order:
// 1. `.env.${NODE_ENV}.local` -
//    Local overrides of env-specific settings. This file _is not loaded_ for
//    the `test` env.
// 2. `.env.local` -
//    Local overrides. This file _is not loaded_ for the `test` env.
// 2. `.env.${NODE_ENV}` -
//    Env-specific settings.
// 3. `.env` -
//    General settings.

// don't include local overrides for the `test` env because tests must produce
// the same results for everyone
if (envType !== 'test') {
  loadEnvFile(`.${envType}.local`);
  loadEnvFile('.local');
}

if (envType) loadEnvFile(`.${envType}`);
loadEnvFile();

// raw env variables
const raw = {};
// env variables for the DefinePlugin
const stringified = {};

function addEnvVar(key, value) {
  raw[key] = value;
  stringified[key] = JSON.stringify(value);
}

// add general env variables
addEnvVar('NODE_ENV', envType);
addEnvVar('PUBLIC_URL', paths.servedPath);

// add REACT_APP_* env variables
Object.keys(process.env)
  .filter(key => /^REACT_APP_/i.test(key))
  .forEach(key => addEnvVar(key, process.env[key]));

module.exports = {
  raw,
  stringified,
  type: envType,
  assertEnvType(requiredEnv) {
    if (envType !== requiredEnv) {
      throw new Error(
        `The NODE_ENV environment variable should be '${requiredEnv}'`
      );
    }
  }
};
