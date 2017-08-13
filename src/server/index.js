const events = require('events')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const graphqlHTTP = require('express-graphql')
const MongoStore = require('connect-mongo')(session)

const passport = require('data/user/passport')
const schema = require('data/schema')
const { APP_PORT } = require('config')

const app = express()

class Loader extends events.EventEmitter {
  init () {
    const db = require('./db')

    app.use(bodyParser.json())
    app.use(
      session({
        secret: 'espace takeout',
        saveUninitialized: true,
        resave: true,
        store: new MongoStore({
          mongooseConnection: db
        })
      })
    )
    app.use(passport.initialize())
    app.use(passport.session())

    app.use(
      '/graphiql',
      graphqlHTTP({
        schema: schema,
        pretty: true,
        graphiql: true
      })
    )

    app.listen(APP_PORT, () => {
      this.emit('server.loaded')
      console.log(`Listening at port ${APP_PORT}`)
    })
  }
}

module.exports = new Loader()
