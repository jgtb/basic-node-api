const mongoose = require('mongoose'),
      bcrypt   = require('bcrypt')

const UserSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      max: 255
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 255
    },
    password: {
      type: String,
      required: true,
      max: 225
    },
    status: {
      type: Number,
      required: true
    }
}, {
    timestamps: true
})

UserSchema.methods.comparePassword = function(password) {
  //return bcrypt.compareSync(password, this.password)
  return password == this.password
}

module.exports = mongoose.model('User', UserSchema, 'users')
