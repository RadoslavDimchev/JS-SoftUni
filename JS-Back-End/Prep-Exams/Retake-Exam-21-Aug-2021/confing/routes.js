const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const housingController = require('../controllers/housingController');
const { isGuest } = require('../middlewares/guards');


module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/housing', housingController);
  app.use((req, res, next) => {
    res.render('404', {
      title: 'Error Page'
    });
  });
};