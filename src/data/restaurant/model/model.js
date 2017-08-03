const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			required: true,
			unique: true
		},
		name: {
			type: String,
			required: true
		},
		flavour: String,
		add_date: {
			type: Date,
			default: Date.now
		},
		blacklist: {
			type: Boolean,
			default: false
		},
		menu: [
			{
				food: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Food',
					required: true
				},
				price: {
					type: Number,
					required: true
				}
			}
		]
	},
	{
		collection: 'restaurant'
	}
)

module.exports = mongoose.model('Restaurant', restaurantSchema)
