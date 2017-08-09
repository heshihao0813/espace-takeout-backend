const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
  {
    eleme_id: {
      type: Number,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    description: String,
    sub_categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      }
    ]
  },
  {
    collection: 'category'
  }
)

module.exports = mongoose.model('Category', categorySchema)
