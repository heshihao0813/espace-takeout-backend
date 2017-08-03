const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
	{
		group: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Group'
		},
		restaurant: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Restaurant'
		},
		crew: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User'
				},
				food: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Food'
				}
			}
		],
		time: {
			type: Date,
			required: true
		},
		location: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Location'
		},
		payer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		payment: {
			type: Number,
			required: true
		}
	},
	{
		collection: 'order'
	}
)

module.exports = mongoose.model('Restaurant', orderSchema)
