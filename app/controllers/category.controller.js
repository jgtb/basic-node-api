const Category = require('../models/category.model.js')

exports.index = function(req, res) {
  Category.find({user: req.user._id, status: 1}).exec(function(err, categories) {
    if (err) res.status(500).send()
    if (!err) res.send(categories)
  })
}

exports.view = function(req, res) {
  Category.findById(req.params.id, function(err, category) {
    if (err) res.status(500).send()
    if (!err) res.send(category)
  }).populate('user')
}

exports.create = function(req, res) {
  const category = new Category(req.body)
  category.user = req.user._id
  category.status = 1
  category.save(function(err, category) {
    if (err) res.status(500).send()
    if (!err) res.status(200).send()
  })
}

exports.update = function(req, res) {
  Category.findById(req.params.id, function(err, category) {
    category.description = req.body.description
    category.save(function(err, category) {
      if (err) res.status(500).send()
      if (!err) res.status(200).send()
    })
  })
}

exports.delete = function(req, res) {
  Category.findById(req.params.id, function(err, category) {
    category.status = 0
    category.save(function(err, category) {
      if (err) res.status(500).send()
      if (!err) res.status(200).send()
    })
  })
}
