const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const CategorySchema = mongoose.Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    description: {
      type: String,
      required: true,
      max: 255
    },
    status: {
      type: Number,
      required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Category', CategorySchema, 'categories')
