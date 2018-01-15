module.exports = function(app) {
  const checklist = require('../controllers/checklist.controller.js'),
        auth      = require('../middlewares/checklist.middleware.js')

  app.get('/checklist/index', checklist.index);

  app.get('/checklist/view/:id', auth.canAccess, checklist.view);

  app.post('/checklist/create/', checklist.create);

  app.put('/checklist/update/:id', auth.canAccess, checklist.update);

  app.delete('/checklist/delete/:id', auth.canAccess, checklist.delete);
}
