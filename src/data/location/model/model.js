const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema(
	{
		address: {
			type: String,
			required: true
		}
	},
	{
		collection: 'location'
	}
)

module.exports = mongoose.model('Location', locationSchema)
