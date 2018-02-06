const mongoose = require('mongoose'),
      bcrypt   = require('bcrypt'),
      jwt      = require('jsonwebtoken')

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
    img: {
      type: String
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

UserSchema.methods.token = function() {
  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name
  }, 'RESTFULAPIs')
}

module.exports = mongoose.model('User', UserSchema, 'users')
