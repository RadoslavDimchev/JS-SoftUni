const { hasUser } = require('../middlewares/guards');
const { getRecent, getAll } = require('../services/housingService');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
  const housings = await getRecent();

  res.render('home', {
    title: 'Home Page',
    housings
  });
});

homeController.get('/housings', async (req, res) => {
  const housings = await getAll();

  res.render('housings', {
    title: 'Housings For Rent',
    housings
  });
});


homeController.get('/search', hasUser(), async (req, res) => {
  const housings = await getAll(req.query.search);

  res.render('search', {
    title: 'Search',
    housings,
    search: req.query.search
  });
});

module.exports = homeController;