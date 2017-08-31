const expect = require('chai').expect

const User = require('data/user/model/model')

describe('Spec for user schema', function () {
  it('should be invalid if [username] is missed', done => {
    const user = new User()
    user.validate(err => {
      expect(err.errors.username).to.exist
      done()
    })
  })

  it('should be invalid if [password] is missed', done => {
    const user = new User()
    user.validate(err => {
      expect(err.errors.password).to.exist
      done()
    })
  })

  it('should be invalid if [gender] is not in enumeration', done => {
    const user = new User({
      gender: 'not in enum'
    })
    user.validate(err => {
      expect(err.errors.gender).to.exist
      done()
    })
  })

  it('should be invalid if [birthday] cannot be cast to Date', done => {
    const user = new User({
      birthday: 'not date'
    })
    user.validate(err => {
      expect(err.errors.birthday).to.exist
      done()
    })
  })

  it('should [birthday] be correctly cast to Date if possible', done => {
    const user = new User({
      birthday: '1989/08/13'
    })
    expect(user.birthday).to.exist
    user.validate(err => {
      expect(err.errors.birthday).to.not.exist
      done()
    })
  })

  it('should [admin] be false by default', done => {
    const user = new User()
    expect(user.admin).to.equal(false)
    done()
  })
})
