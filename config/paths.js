const path = require('path');
const fs = require('fs');
const url = require('url');

// fs.realpathSync makes sure all symlinks are resolved
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
function resolveFile(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

const appPackageJson = resolveFile('package.json');
const publicUrl =
  process.env.PUBLIC_URL || require(appPackageJson).homepage || '/';

function removeSlash(filePath) {
  const hasSlash = filePath.endsWith('/');
  return hasSlash ? filePath.slice(0, -1) : filePath;
}

module.exports = {
  appDirectory,
  dotenv: resolveFile('.env'),
  appBuild: resolveFile('build'),
  appPublic: resolveFile('public'),
  appHtml: resolveFile('public/index.html'),
  appIndexJs: resolveFile('src/index.js'),
  appRenderJs: resolveFile('src/renderApp.js'),
  appRenderHotJs: resolveFile('src/renderAppHot.js'),
  appPackageJson,
  appSrc: resolveFile('src'),
  yarnLockFile: resolveFile('yarn.lock'),
  appNodeModules: resolveFile('node_modules'),
  publicUrl,
  // `servedPath` is where the app is served from
  servedPath: removeSlash(url.parse(publicUrl).pathname)
};
