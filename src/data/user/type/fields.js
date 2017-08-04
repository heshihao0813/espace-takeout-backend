const { GraphQLString, GraphQLNonNull } = require('graphql')
const GraphQLDate = require('graphql-date')

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
  }
}
