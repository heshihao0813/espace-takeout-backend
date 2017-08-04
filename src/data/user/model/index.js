const passport = require('passport')
const User = require('./model')

const model = {
  register ({ username, password, display_name, gender, birthday }) {
    const createUser = new Promise((resolve, reject) => {
      User.register(
        new User({
          username,
          display_name,
          gender,
          birthday
        }),
        password,
        (err, user) => {
          err && reject(err)
          !user && reject(new Error('Registration failed'))
          resolve(user)
        }
      )
    })

    return createUser
  },

  login ({ username, password, req }) {
    if (req.user) {
      return req.user
    }

    req.body.username = username
    req.body.password = password
    const auth = new Promise((resolve, reject) => {
      passport.authenticate('local', (err, user, info) => {
        err && reject(err)
        !user && reject(new Error('Login failed'))

        req.logIn(user, err => {
          err && reject(err)
          resolve(user)
        })
      })(req)
    })

    return auth
  }
}

module.exports = model
