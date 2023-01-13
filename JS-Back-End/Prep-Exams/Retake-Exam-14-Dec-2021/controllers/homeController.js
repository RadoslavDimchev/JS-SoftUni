const homeController = require('express').Router();
const { getAll } = require('../services/artService');


homeController.get('/', async (req, res) => {
  res.render('home', {
    title: 'Home Page',
    arts: await getAll()
  });
});

homeController.get('/gallery', async (req, res) => {
  res.render('gallery', {
    title: 'Gallery Page',
    arts: await getAll()
  });
});

homeController.get('/my-profile', (req, res) => {
  res.render('profile', {
    title: 'My Profile Page'
  });
});

module.exports = homeController;