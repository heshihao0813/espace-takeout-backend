const { GraphQLObjectType } = require('graphql')

const model = require('../model/')
const {
  username,
  password,
  display_name,
  gender,
  birthday
} = require('../type/fields')

module.exports = {
  type: new GraphQLObjectType({
    name: 'Register',
    fields: {
      username,
      display_name,
      gender,
      birthday
    }
  }),
  args: {
    username,
    password,
    display_name,
    gender,
    birthday
  },
  resolve (root, params, context, ast) {
    return model.register({
      ...params
    })
  }
}
