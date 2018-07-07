const babelJest = require('babel-jest')
const options = require('./.babelrc')

module.exports = babelJest.createTransformer(options)
