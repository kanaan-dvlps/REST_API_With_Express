module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5003,
  URL: process.env.BASE_URL || 'http://localhost:5003',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://rest_api_express:compl3x!ty@ds255253.mlab.com:55253/rest_api_express'
}