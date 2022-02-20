const path = require('path')

const getPath = (dirName) => path.join(process.cwd(), dirName)

module.exports = {
  getPath,
}
