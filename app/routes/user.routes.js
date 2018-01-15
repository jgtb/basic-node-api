module.exports = function(app) {
  const user = require('../controllers/user.controller.js'),
        auth = require('../middlewares/user.middleware.js')

  app.get('/user/view/:id', user.view)

  app.put('/user/update/:id', user.update)

  app.delete('/user/delete/:id', user.delete)
}
