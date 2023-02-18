const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const addController = require('../controllers/addController');


module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/add', addController);
  app.use((req, res, next) => {
    res.render('404', {
      title: 'Error Page'
    });
  });
};