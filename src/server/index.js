const events = require('events')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const jwt = require('express-jwt')

const schema = require('data/schema')
const { APP_PORT, JWT_SECRET } = require('config')

const app = express()

class Loader extends events.EventEmitter {
  init () {
    require('./db')

    app.use(
      jwt({
        secret: JWT_SECRET,
        credentialsRequired: false
      })
    )

    app.use(
      '/graphql',
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
