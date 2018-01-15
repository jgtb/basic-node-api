const Checklist = require('../models/checklist.model.js')

exports.canAccess = function(req, res, next) {
  Checklist.findById(req.params.id, function(err, checklist) {
    if (req.user) {
      if (req.user._id == checklist.user) {
        next()
      } else {
        return res.status(401).send();
      }
    } else {
      return res.status(401).send();
    }
  })
}
