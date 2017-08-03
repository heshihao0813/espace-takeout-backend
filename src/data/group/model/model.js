const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		}
	},
	{
		collection: 'group'
	}
)

module.exports = mongoose.model('Group', groupSchema)
