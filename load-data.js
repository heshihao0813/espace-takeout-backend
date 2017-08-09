const db = require('./src/server/db')
const user = require('./src/data/user/model/')
const restaurant = require('./src/data/restaurant/model/')

async function load () {
  await restaurant.create({
    eleme_id: 12345,
    name: 'test_restaurant',
    address_text: 'test_address',
    longitude: 100,
    atitude: 100
  })
}

load()
  .then(() => {
    db.close()
  })
  .catch(err => {
    console.log(err)
    db.close()
  })
