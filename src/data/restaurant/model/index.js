const Restaurant = require('./model')

module.exports = {
  add: config => {
    const neo = new Restaurant(config)
    return neo.save()
  }
}
