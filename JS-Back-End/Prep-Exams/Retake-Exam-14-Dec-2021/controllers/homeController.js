const homeController = require('express').Router();
const { hasUser, isOwner } = require('../middlewares/guards');
const { getAll, getAllMyArts, getAllMyShared } = require('../services/artService');


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

homeController.get('/my-profile', hasUser(), async (req, res) => {
  const sharedArts = (await getAllMyShared(req.user._id)).map(a => a.title).join(', ');
  const myArts = (await getAllMyArts(req.user._id)).map(a => a.title).join(', ');

  res.render('profile', {
    title: 'My Profile Page',
    myArts,
    sharedArts
  });
});

module.exports = homeController;