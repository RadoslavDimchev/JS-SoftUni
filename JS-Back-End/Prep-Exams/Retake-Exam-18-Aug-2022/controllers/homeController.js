const { getAll, getMyWishedBooks } = require('../services/bookService');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
});

homeController.get('/catalog', async (req, res) => {
  const books = await getAll();

  res.render('catalog', {
    title: 'Catalog',
    books
  });
});

homeController.get('/profile', async (req, res) => {
  const books = await getMyWishedBooks(req.user._id);

  res.render('profile', {
    title: 'Profile',
    books
  });
});

module.exports = homeController;