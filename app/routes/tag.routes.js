module.exports = function(app) {
  const tag  = require('../controllers/tag.controller.js'),
        auth = require('../middlewares/tag.middleware.js')

  app.get('/tag/index', tag.index);

  app.get('/tag/view/:id', auth.canAccess, tag.view);

  app.post('/tag/create/', tag.create);

  app.put('/tag/update/:id', auth.canAccess, tag.update);

  app.delete('/tag/delete/:id', auth.canAccess, tag.delete);
}
