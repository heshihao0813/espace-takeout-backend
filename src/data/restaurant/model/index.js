const Restaurant = require('./model')

module.exports = {
  add: config => {
    const neo = new Restaurant(config)
    return neo.save()
  },

  update: async (
    { _id, elemeId },
    { name, addressText, longitude, atitude, blacklist }
  ) => {
    if (!_id && !elemeId) {
      return new Error('Id is not provided')
    }

    let restaurant
    if (_id) {
      restaurant = await Restaurant.findById(_id)
    } else {
      restaurant = await Restaurant.findOne({
        elemeId
      })
    }

    if (!restaurant) {
      return new Error('Restaurant not found')
    }

    restaurant.name = name || restaurant.name
    restaurant.addressText = addressText || restaurant.addressText
    restaurant.longitude = longitude || restaurant.longitude
    restaurant.atitude = atitude || restaurant.atitude
    restaurant.blacklist =
      typeof blacklist !== 'undefined' ? blacklist : restaurant.blacklist

    return restaurant.save()
  }
}
