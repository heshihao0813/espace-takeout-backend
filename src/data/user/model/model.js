const mongoose = require('mongoose')

const { genderEnum } = require.main.require('./constant/enum')

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true
		},
		display_name: String,
		salt: {
			type: String,
			required: true
		},
		password_hash: {
			type: String,
			required: true
		},
		gender: {
			type: String,
			enum: genderEnum
		},
		birthday: Date
	},
	{
		collection: 'user'
	}
)

module.exports = mongoose.model('User', userSchema)
