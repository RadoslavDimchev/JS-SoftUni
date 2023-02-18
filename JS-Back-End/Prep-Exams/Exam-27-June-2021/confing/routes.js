const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const tripController = require('../controllers/tripController');


module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/trip', tripController);
  app.use((req, res, next) => {
    res.render('404', {
      title: 'Error Page'
    });
  });
};