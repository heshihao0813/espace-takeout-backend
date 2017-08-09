const user = require('./user/mutation')
const restaurant = require('./restaurant/mutation')

module.exports = {
  ...user,
  ...restaurant
}
