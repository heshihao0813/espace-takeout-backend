const expect = require('chai').expect

const User = require('data/user/model/model')

describe('Spec for user schema', () => {
  it('should be invalid if gender is missed', done => {
    const user = new User()
    user.validate(err => {
      expect(err.errors.gender).to.exist
      done()
    })
  })
})
