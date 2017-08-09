const { GraphQLObjectType } = require('graphql')

const fields = require('./fields')

module.exports = new GraphQLObjectType({
  name: 'UserType',
  fields
})
