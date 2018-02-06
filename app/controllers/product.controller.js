const Product = require('../models/product.model.js')

exports.index = function(req, res) {
  Product.find({user: req.user._id, status: 1})
    .populate({path: 'category'})
    .populate({path: 'tags'})
    .exec(function(err, products) {
      if (err) res.status(500).send()
      if (!err) res.send(products)
  })
}

exports.view = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) res.status(500).send()
    if(!err) res.status(200).send(product)
  }).populate({path: 'category'})
    .populate({path: 'tags'})
}

exports.create = function(req, res) {
  const product = new Product(req.body)
  product.user = req.user._id
  product.status = 1
  req.body.tags.map(tagId => product.tags.push(tagId));
  product.save(function(err, product) {
    if (err) res.status(500).send()
    if (!err) res.status(200).send()
  })
}

exports.update = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    product.category = req.body.category
    product.description = req.body.description
    product.price = req.body.price
    product.quantity = req.body.quantity
    product.img = req.body.img
    product.tags.map(tagId => product.tags.remove(tagId))
    req.body.tags.map(tagId => product.tags.push(tagId))
    product.save(function(err, product) {
      if (err) res.status(500).send()
      if (!err) res.status(200).send()
    })
  })
}

exports.delete = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    product.status = 0
    product.save(function(err, product) {
      if (err) res.status(500).send()
      if (!err) res.status(200).send()
    })
  })
}
