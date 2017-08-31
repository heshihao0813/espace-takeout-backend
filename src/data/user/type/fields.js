const {
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')
const GraphQLDate = require('graphql-date')

const RestaurantType = require.main.require('./src/data/restaurant/type/')

module.exports = {
  username: {
    type: new GraphQLNonNull(GraphQLString)
  },
  password: {
    type: new GraphQLNonNull(GraphQLString)
  },
  token: {
    type: new GraphQLNonNull(GraphQLString)
  },
  admin: {
    type: GraphQLBoolean
  },
  birthday: {
    type: GraphQLDate
  },
  created: {
    type: GraphQLDate
  },
  displayName: {
    type: GraphQLString
  },
  email: {
    type: GraphQLString
  },
  gender: {
    type: new GraphQLNonNull(GraphQLString)
  },
  preference: {
    type: [
      {
        restautant: {
          type: RestaurantType
        },
        rate: new GraphQLNonNull(GraphQLInt)
      }
    ]
  }
}
