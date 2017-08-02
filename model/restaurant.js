const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
	name: {
		Type: String,
		required: true
	},
	flavour: String,
	location: {
		Type: String,
		required: true
	},
	distance: Number
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
