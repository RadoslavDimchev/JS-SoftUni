const authController = require('../controllers/authController');
const courseController = require('../controllers/courseController');
const homeController = require('../controllers/homeController');
const { hasUser } = require('../middlewares/guards');


module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/course', hasUser(), courseController);
};