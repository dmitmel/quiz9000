const fs = require('fs');
const path = require('path');

const thisModule = path.basename(__filename, '.js');

fs
  .readdirSync(__dirname)
  .map(block => path.basename(block, '.js'))
  .filter(blockName => blockName !== thisModule)
  .forEach(
    blockName => (module.exports[blockName] = require(`./${blockName}`))
  );
