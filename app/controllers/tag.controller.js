const Tag = require('../models/tag.model.js')

exports.index = function(req, res) {
  Tag.find({user: req.user._id, status: 1}).exec(function(err, tags) {
    if (err) res.status(500).send()
    if (!err) res.send(tags)
  })
}

exports.view = function(req, res) {
  Tag.findById(req.params.id, function(err, tag) {
    if (err) res.status(500).send();
    if (!err) res.send(tag)
  }).populate('user')
}

exports.create = function(req, res) {
  const tag = new Tag(req.body)
  tag.user = req.user._id
  tag.status = 1
  tag.save(function(err, tag) {
    if (err) res.status(500).send()
    if (!err) res.status(200).send()
  })
}

exports.update = function(req, res) {
  Tag.findById(req.params.id, function(err, tag) {
    tag.description = req.body.description
    tag.save(function(err, tag) {
      if (err) res.status(500).send()
      if (!err) res.status(200).send()
    })
  })
}

exports.delete = function(req, res) {
  Tag.findById(req.params.id, function(err, tag) {
    tag.status = 0
    tag.save(function(err, tag) {
      if (err) res.status(500).send()
      if (!err) res.status(200).send()
    })
  })
}
