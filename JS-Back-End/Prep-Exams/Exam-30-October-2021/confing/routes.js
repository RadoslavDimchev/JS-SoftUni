const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const postController = require('../controllers/postController');


module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/post', postController);
  app.use((req, res, next) => {
    res.render('404', {
      title: 'Error Page'
    });
  });
};