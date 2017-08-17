const { GraphQLObjectType } = require('graphql')

const model = require('../model/')
const fields = require('../type/fields')

module.exports = {
  type: new GraphQLObjectType({
    name: 'UpdateRestaurant',
    fields
  }),
  args: fields,
  resolve (root, params, context, ast) {
    return model.update(params, params)
  }
}
