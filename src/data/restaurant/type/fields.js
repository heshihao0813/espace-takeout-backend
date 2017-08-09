const {
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')

module.exports = {
  eleme_id: {
    type: GraphQLInt
  },
  name: {
    type: new GraphQLNonNull(GraphQLString)
  },
  address_text: {
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
