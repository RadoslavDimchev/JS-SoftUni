const homeController = require('express').Router();


// TODO replace with real controller
homeController.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    user: req.user
  });
});

module.exports = homeController;