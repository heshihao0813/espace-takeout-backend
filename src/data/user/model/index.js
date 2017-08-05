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

  login ({ username, password }, context) {
    if (context.user) {
      return context.user
    }

    context.body.username = username
    context.body.password = password
    const auth = new Promise((resolve, reject) => {
      passport.authenticate('local', (err, user, info) => {
        err && reject(err)
        !user && reject(new Error('Login failed'))

        context.logIn(user, err => {
          err && reject(err)
          resolve(user)
        })
      })(context)
    })

    return auth
  },

  logout (context) {
    if (!context.user) {
      return new Error('Not logged in yet')
    }
    const username = context.user.username
    context.logout()
    return username
  }
}

module.exports = model
