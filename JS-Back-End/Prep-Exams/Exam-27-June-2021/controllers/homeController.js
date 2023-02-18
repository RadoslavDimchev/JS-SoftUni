const { hasUser } = require('../middlewares/guards');
const { getAll, getMyTrips } = require('../services/tripService');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page'
  });
});

homeController.get('/catalog', async (req, res) => {
  const trips = await getAll();

  res.render('shared-trips', {
    title: 'Shared Trips',
    trips
  });
});

homeController.get('/profile', hasUser(), async (req, res) => {
  const trips = await getMyTrips(req.user._id);

  res.render('profile', {
    title: 'Profile Page',
    trips,
    tripsCount: trips.length
  });
});

module.exports = homeController;