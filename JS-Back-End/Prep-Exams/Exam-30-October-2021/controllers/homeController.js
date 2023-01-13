const { hasUser } = require('../middlewares/guards');
const { getAll, getAllMyPosts } = require('../services/postService');

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

homeController.get('/my-posts', hasUser(), async (req, res) => {
  res.render('posts', {
    title: 'My Posts Page',
    posts: await getAllMyPosts(req.user._id)
  });
});

homeController.get('*', (req, res) => {
  res.render('404', {
    title: 'Error Page'
  });
});

module.exports = homeController;