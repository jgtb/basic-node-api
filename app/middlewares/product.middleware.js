const Product = require('../models/product.model.js')

exports.canAccess = function(req, res, next) {
  Product.findById(req.params.id, function(err, product) {
    if (req.user) {
      if (req.user._id == product.user) {
        next()
      } else {
        return res.status(401).send();
      }
    } else {
      return res.status(401).send();
    }
  })
}
