const expect = require('chai').expect

const Restaurant = require('data/restaurant/model/model')

describe('Spec for restaurant schema', function () {
  it('should be invalid if [elemeId] is not typeof Number', done => {
    const restaurant = new Restaurant({
      elemeId: 'not a number'
    })
    restaurant.validate(err => {
      expect(err.errors.elemeId).to.exist
      done()
    })
  })

  it('should be invalid if [name] is missed', done => {
    const restaurant = new Restaurant()
    restaurant.validate(err => {
      expect(err.errors.name).to.exist
      done()
    })
  })

  it('should be invalid if [addressText] is missed', done => {
    const restaurant = new Restaurant()
    restaurant.validate(err => {
      expect(err.errors.addressText).to.exist
      done()
    })
  })

  it('should be invalid if [longitude] is missed', done => {
    const restaurant = new Restaurant()
    restaurant.validate(err => {
      expect(err.errors.longitude).to.exist
      done()
    })
  })

  it('should be invalid if [longitude] is not typeof Number', done => {
    const restaurant = new Restaurant({
      longitude: 'not a number'
    })
    restaurant.validate(err => {
      expect(err.errors.longitude).to.exist
      done()
    })
  })

  it('should be invalid if [atitude] is missed', done => {
    const restaurant = new Restaurant()
    restaurant.validate(err => {
      expect(err.errors.atitude).to.exist
      done()
    })
  })

  it('should be invalid if [atitude] is not typeof Number', done => {
    const restaurant = new Restaurant({
      atitude: 'not a number'
    })
    restaurant.validate(err => {
      expect(err.errors.atitude).to.exist
      done()
    })
  })

  it('should [addDate] be the date of today by default', done => {
    const restaurant = new Restaurant({})
    const now = new Date()
    expect(restaurant.addDate.toDateString()).to.equal(now.toDateString())
    done()
  })

  it('should be invalid if [addDate] is cannot be cast to Date', done => {
    const restaurant = new Restaurant({
      addDate: 'not a date'
    })
    restaurant.validate(err => {
      expect(err.errors.addDate).to.exist
      done()
    })
  })

  it('should [blacklist] be false by default', done => {
    const restaurant = new Restaurant({})
    expect(restaurant.blacklist).to.equal(false)
    done()
  })
})
