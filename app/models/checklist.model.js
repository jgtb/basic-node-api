const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const ChecklistSchema = mongoose.Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
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

module.exports = mongoose.model('Checklist', ChecklistSchema, 'checklists')
