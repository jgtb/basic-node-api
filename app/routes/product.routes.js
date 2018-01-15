module.exports = function(app) {
  const product  = require('../controllers/product.controller.js'),
        auth     = require('../middlewares/product.middleware.js')

  app.get('/product/index', product.index);

  app.get('/product/view/:id', auth.canAccess, product.view);

  app.post('/product/create', product.create);

  app.put('/product/update/:id', auth.canAccess, product.update);

  app.delete('/product/delete/:id', auth.canAccess, product.delete);
}
