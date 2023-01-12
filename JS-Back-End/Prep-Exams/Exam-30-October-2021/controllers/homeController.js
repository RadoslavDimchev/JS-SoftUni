const { getAll } = require('../services/postService');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page'
  });
});

homeController.get('/posts', async (req, res) => {
  res.render('posts', {
    title: 'Posts Page',
    posts: await getAll()
  });
});

module.exports = homeController;