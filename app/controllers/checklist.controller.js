const Checklist = require('../models/checklist.model.js')

exports.index = function(req, res) {
  Checklist.find({user: req.user._id, status: 1})
    .populate({path: 'products'})
    .exec(function(err, checklists) {
      if (err) res.status(500).send()
      if (!err) res.send(checklists)
  })
}

exports.view = function(req, res) {
  Checklist.findById(req.params.id, function(err, checklist) {
    if (err) res.status(500).send();
    if (!err) res.send(checklist);
  }).populate({path: 'products'});
}

exports.create = function(req, res) {
  const checklist = new Checklist(req.body)
  checklist.user = req.user._id
  checklist.status = 1
  req.body.products.map(productId => checklist.products.push(productId));
  checklist.save(function(err, checklist) {
    if (err) res.status(500).send()
    if (!err) res.status(200).send()
  })
}

exports.update = function(req, res) {
  Checklist.findById(req.params.id, function(err, checklist) {
    checklist.description = req.body.description
    checklist.products.map(productId => checklist.products.remove(productId))
    req.body.products.map(productId => checklist.products.push(productId))
    checklist.save(function(err, checklist) {
      if (err) res.status(500).send()
      if (!err) res.status(200).send()
    })
  })
}

exports.delete = function(req, res) {
  Checklist.findById(req.params.id, function(err, checklist) {
    checklist.status = 0
    checklist.save(function(err, checklist) {
      if (err) res.status(500).send()
      if (!err) res.status(200).send()
    })
  })
}
