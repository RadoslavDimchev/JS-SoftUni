const { hasUser } = require('../middlewares/guards');
const { getAll } = require('../services/addService');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
  const adds = await getAll('', 3);

  res.render('home', {
    title: 'Home',
    adds
  });
});

homeController.get('/catalog', async (req, res) => {
  const adds = await getAll();

  res.render('catalog', {
    title: 'Catalog',
    adds
  });
});

homeController.get('/search', hasUser(), async (req, res) => {
  const adds = await getAll(req.query.search);

  res.render('search', {
    title: 'Search',
    adds,
    search: req.query.search
  });
});


module.exports = homeController;