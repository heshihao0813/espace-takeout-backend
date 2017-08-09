const { GraphQLObjectType } = require('graphql')

const model = require('../model/')
const fields = require('../type/fields')

module.exports = {
  type: new GraphQLObjectType({
    name: 'AddRestaurant',
    fields
  }),
  args: fields,
  resolve (root, params, context, ast) {
    return model.add(params)
  }
}
