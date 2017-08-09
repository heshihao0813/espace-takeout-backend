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
  display_name: {
    type: GraphQLString
  },
  gender: {
    type: new GraphQLNonNull(GraphQLString)
  },
  birthday: {
    type: GraphQLDate
  },
  admin: {
    type: GraphQLBoolean
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
