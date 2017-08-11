const fs = require('fs');
const os = require('os');
const path = require('path');
const process = require('process');

/**
 * Searches for a Prettier configuration file in the current working directory and its ancestor
 * directories, stopping at the user's home directory or root directory, if the current working
 * directory is outside of the user's home directory.
 *
 * Currently the only supported configuration file is .prettierrc.
 */
module.exports = function readPrettierConfig() {
  let previousDirectory;
  let currentDirectory = process.cwd();

  do {
    let configPath = path.join(currentDirectory, '.prettierrc');
    let configString = _readFileSafe(configPath);
    if (configString) {
      return JSON.parse(configString);
    }

    previousDirectory = currentDirectory;
    currentDirectory = path.dirname(currentDirectory);
  } while (currentDirectory !== previousDirectory && previousDirectory !== os.homedir());

  return null;
};

function _readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'EACCES') {
      return null;
    }
    throw error;
  }
}
