const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const query = require('./query')
const mutation = require('./mutation')

const schema = new GraphQLSchema({
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  }),
  query: new GraphQLObjectType({
    name: 'Query',
    fields: query
  })
})

module.exports = schema
