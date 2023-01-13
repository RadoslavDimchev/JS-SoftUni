const artController = require('../controllers/artController');
const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');


module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/art', artController);
  app.use((req, res, next) => {
    res.render('404', {
      title: 'Error Page'
    });
  });
};