const { getAllByLikes, getAllByDate, getAllNewest, getAllMostLiked } = require('../services/playService');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
  let plays = [];

  if (req.user) {
    plays = await getAllByDate();
  } else {
    plays = await getAllByLikes();
  }

  res.render('home', {
    title: 'Home Page',
    plays
  });
});

homeController.get('/newest', async (req, res) => {
  res.render('home', {
    title: 'Home Page - Newest',
    plays: await getAllNewest()
  });
});

homeController.get('/most-liked', async (req, res) => {
  res.render('home', {
    title: 'Home Page - Most Liked',
    plays: await getAllMostLiked()
  });
});

module.exports = homeController;