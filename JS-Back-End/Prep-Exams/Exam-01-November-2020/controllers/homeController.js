const { getAllByDate, getRecent } = require('../services/courseService');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
  let view;
  let courses = [];

  if (req.user) {
    view = 'user-home';
    courses = await getAllByDate(req.query.search);
  } else {
    view = 'guest-home';
    courses = await getRecent();
  }

  res.render(view, {
    title: 'Home Page',
    courses,
    search: req.query.search
  });
});

module.exports = homeController;