require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({ 
	host : process.env.HOST || 'localhost',
	port : process.env.PORT || 3000,
	node_env : process.env.NODE_ENV || 'development'
}, environment);