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
  // eslint-disable-next-line import/no-dynamic-require
  process.env.PUBLIC_URL || require(appPackageJson).homepage || '/';

function ensureSlash(filePath, needsSlash) {
  const hasSlash = filePath.endsWith('/');
  return hasSlash && !needsSlash
    ? filePath.slice(0, -1)
    : !hasSlash && needsSlash
      ? `${filePath}/`
      : filePath;
}

module.exports = {
  appDirectory,
  dotenv: resolveFile('.env'),
  appBuild: resolveFile('build'),
  appPublic: resolveFile('public'),
  appHtml: resolveFile('public/index.html'),
  appIndexJs: resolveFile('src/index.jsx'),
  appPackageJson,
  appSrc: resolveFile('src'),
  yarnLockFile: resolveFile('yarn.lock'),
  appNodeModules: resolveFile('node_modules'),
  publicUrl,
  // `servedPath` is where the app is served from
  servedPath: ensureSlash(url.parse(publicUrl).pathname, false),
  ensureSlash,
};
