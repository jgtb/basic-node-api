const Category = require('../models/category.model.js')

exports.canAccess = function(req, res, next) {
  Category.findById(req.params.categoryId, function(err, category) {
    if (req.user) {
      if (req.user._id == category.user) {
        next()
      } else {
        return res.status(401).send();
      }
    } else {
      return res.status(401).send();
    }
  })
}
