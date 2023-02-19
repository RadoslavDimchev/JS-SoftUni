const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const cryptoController = require('../controllers/cryptoController');


module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/crypto', cryptoController);
  app.use((req, res, next) => {
    res.render('404', {
      title: 'Error Page'
    });
  });
};