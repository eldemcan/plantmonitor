process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

console.log(environment.toWebpackConfig())

module.exports = environment.toWebpackConfig()
