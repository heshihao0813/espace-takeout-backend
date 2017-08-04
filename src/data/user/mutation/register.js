const { GraphQLObjectType } = require('graphql')

const model = require('../model/index')
const fields = require('../type/fields')

module.exports = {
  type: new GraphQLObjectType({
    name: 'Register',
    fields: {
      username: fields.username
    }
  }),
  args: fields,
  resolve (root, params, context, ast) {
    return model.register({
      ...params
    })
  }
}
