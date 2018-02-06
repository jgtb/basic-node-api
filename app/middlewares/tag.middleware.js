const Tag = require('../models/tag.model.js')

exports.canAccess = function(req, res, net) {
  Tag.findById(req.params.id, function(err, tag) {
    if (req.user) {
      if (req.user._id == tag.user) {
        next()
      } else {
        return res.status(401).send();
      }
    } else {
      return res.status(401).send();
    }
  })
}
