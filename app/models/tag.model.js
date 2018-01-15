const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const TagSchema = mongoose.Schema({
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

module.exports = mongoose.model('Tag', TagSchema, 'tags')
