const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const photoController = require('../controllers/photoController');


module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/photo', photoController);
  app.use((req, res, next) => {
    res.render('404', {
      title: 'Error Page'
    });
  });
};