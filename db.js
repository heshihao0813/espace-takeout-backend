const mongoose = require('mongoose')

const { DB_URI } = require('./config')

mongoose.connect(DB_URI)

mongoose.connection.on('connected', () =>
  console.log(`Mongoose default connection open to ${DB_URI}`)
)

mongoose.connection.on('error', err =>
  console.log(`Mongoose default connection error: ${err}`)
)

mongoose.connection.on('disconnected', () =>
  console.log('Mongoose default connection disconnected')
)

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', async () => {
  await mongoose.connection.close()
  console.log(
    'Mongoose default connection disconnected through app termination'
  )
  process.exit(0)
})

module.exports = mongoose.connection
