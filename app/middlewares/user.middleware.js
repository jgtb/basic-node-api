const User = require('../models/user.model.js')

exports.canAccess = function(req, res, next) {
  if (req.user._id == req.id) {
    next()
  } else {
    return res.status(401).send();
  }
}
