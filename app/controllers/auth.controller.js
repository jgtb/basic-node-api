const User    = require('../models/user.model.js'),
      bcrypt  = require('bcrypt')

exports.register = function(req, res) {
  const user = new User(req.body)
  //user.password = bcrypt.hashSync(req.body.password)
  user.status = 1
  user.save(function(err, user) {
    if (err) res.status(500).send()
    if (!err) res.status(200).send()
  })
}

exports.login = function(req, res) {
  const user = User.findOne(req.body, (err, user) => {
    if (err) res.status(500).send();
    if (!user) {
      res.status(401).send();
    } else if (user) {
      if (user.comparePassword(req.body.password)) {
        return res.status(200).json({token: user.token(), user: user}).send()
      } else {
        res.status(401).send()
      }
    }
  })
}

exports.forgotPassword = function(req, res) {

}
