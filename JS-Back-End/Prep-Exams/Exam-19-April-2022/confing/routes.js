const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const auctionController = require('../controllers/auctionController');


module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/auction', auctionController);
  app.use((req, res, next) => {
    res.render('404', {
      title: 'Error Page'
    });
  });
};