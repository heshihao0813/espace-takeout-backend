const {
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')

module.exports = {
  _id: {
    type: GraphQLString
  },
  elemeId: {
    type: GraphQLInt
  },
  name: {
    type: new GraphQLNonNull(GraphQLString)
  },
  addressText: {
    type: new GraphQLNonNull(GraphQLString)
  },
  longitude: {
    type: new GraphQLNonNull(GraphQLFloat)
  },
  atitude: {
    type: new GraphQLNonNull(GraphQLFloat)
  },
  blacklist: {
    type: GraphQLBoolean
  }
}
