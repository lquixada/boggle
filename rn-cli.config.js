const blacklist = require('metro/src/blacklist');

const config = {
  getBlacklistRE() {
    return blacklist([
      /(desktop|web)\/.*/,
    ]);
  },
};

module.exports = config;
