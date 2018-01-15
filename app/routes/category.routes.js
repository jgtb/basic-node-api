module.exports = function(app) {
  const category = require('../controllers/category.controller.js'),
        auth     = require('../middlewares/category.middleware.js')

  app.get('/category/index', category.index);

  app.get('/category/view/:id', auth.canAccess, category.view);

  app.post('/category/create/', category.create);

  app.put('/category/update/:id', auth.canAccess, category.update);

  app.delete('/category/delete/:id', auth.canAccess, category.delete);
}
