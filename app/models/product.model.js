const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const ProductSchema = mongoose.Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag'
      }
    ],
    description: {
      type: String,
      required: true,
      max: 255
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      max: 255
    },
    status: {
      type: Number,
      required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema, 'products')
