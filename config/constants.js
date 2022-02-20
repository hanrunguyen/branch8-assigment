const { getPath } = require('./utils')

const SRC_DIR = getPath('src')
const NODE_MODULES_REGX = /[\\/]node_modules[\\/]/
const DEST_DIR = getPath('dist')
const APP_LOADER_PATH = getPath('src/main.js')

module.exports = {
  SRC_DIR,
  NODE_MODULES_REGX,
  DEST_DIR,
  APP_LOADER_PATH,
}
