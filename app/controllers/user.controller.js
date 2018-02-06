const User = require('../models/user.model.js');

exports.view = function(req, res) {
  User.findById(req.parms.id, function(err, user) {
    if (err) res.status(500).send()
    if (!err) res.send(user)
  })
}

exports.update = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    user.username = req.body.username
    user.email = req.body.email
    user.save(function(err, user) {
      if (err) res.status(500).send()
      if (!err) res.status(200).send()
    })
  })
}

exports.delete = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    user.status = 0
    user.save(function(err, user) {
      if (err) res.status(500).send()
      if (!err) res.status(200).send()
    })
  })
}
