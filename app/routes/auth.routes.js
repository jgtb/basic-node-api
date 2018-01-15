module.exports = function(app) {
  const auth = require('../controllers/auth.controller.js')

  app.post('/auth/register', auth.register)

  app.post('/auth/login', auth.login)

  app.post('/auth/forgot-password', auth.forgotPassword)
}
