const homeController = require('express').Router();


homeController.get('/', (req, res) => {
  let view;
  if (req.user) {
    view = 'user-home';
  } else {
    view = 'guest-home';
  }

  res.render(view, {
    title: 'Home Page'
  });
});

module.exports = homeController;