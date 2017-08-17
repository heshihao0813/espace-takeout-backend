const expect = require('chai').expect
const sinon = require('sinon')

const Restaurant = require('data/restaurant/model/model')
const restaurant = require('data/restaurant/model/')

describe('Spec for restaurant model', function () {
  after(() => {
    Restaurant.findById.restore()
    Restaurant.findOne.restore()
  })

  it('should throw error if neither id is given', async () => {
    const result = await restaurant.update({}, {})
    expect(result).instanceof(Error)
  })

  it('should throw error if no restaurant found with given [_id]', async () => {
    sinon.stub(Restaurant, 'findById').resolves(null)
    const result = await restaurant.update(
      {
        _id: '59953c41b1b6f54b14014a3b'
      },
      {}
    )
    expect(result).instanceof(Error)
  })

  it('should throw error if no restaurant found with given [elemeId]', async () => {
    sinon.stub(Restaurant, 'findOne').resolves(null)
    const result = await restaurant.update(
      {
        elemeId: 'id'
      },
      {}
    )
    expect(result).instanceof(Error)
  })
})
