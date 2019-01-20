const blacklist = require('metro-config/src/defaults/blacklist')

const config = {
  getBlacklistRE () {
    return blacklist([
      /(desktop|web)\/.*/
    ])
  }
}

module.exports = config
