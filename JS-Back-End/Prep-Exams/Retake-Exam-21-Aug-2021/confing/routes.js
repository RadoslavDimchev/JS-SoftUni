const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');


module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
};