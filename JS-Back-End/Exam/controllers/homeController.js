const { hasUser } = require('../middlewares/guards');
const { getAll, getMyPhotos } = require('../services/photoService');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
});

homeController.get('/catalog', async (req, res) => {
  const photos = await getAll();

  res.render('catalog', {
    title: 'Catalog',
    photos
  });
});

homeController.get('/profile', hasUser(), async (req, res) => {
  const photos = await getMyPhotos(req.user._id);

  res.render('profile', {
    title: 'Profile',
    photos
  });
});

module.exports = homeController;