const { getAll } = require('../services/hotelService');

const homeController = require('express').Router();


// TODO replace with real controller
homeController.get('/', async (req, res) => {
  const hotels = await getAll();

  res.render('home', {
    title: 'Home Page',
    hotels
  });
});

module.exports = homeController;