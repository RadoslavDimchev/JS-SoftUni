const { isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const { createPlay, deletePlay, updatePlay, likePlay } = require('../services/playService');
const { parseError } = require('../utils/parser');

const playController = require('express').Router();


playController.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create Page'
  });
});

playController.get('/:id', preload(true), async (req, res) => {
  const play = res.locals.play;

  play.isOwner = req.user._id.toString() === play.owner.toString();
  play.hasLiked = play.likes.map(x => x.toString()).includes(req.user._id.toString());

  res.render('details', {
    title: play.title,
    play
  });
});

playController.post('/create', async (req, res) => {
  const play = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    isPublic: !!req.body.isPublic,
    owner: req.user._id
  };

  try {
    const playData = await createPlay(play);
    res.redirect(`/play/${playData._id}`);
  } catch (error) {
    res.render('create', {
      title: 'Create Page',
      errors: parseError(error),
      play
    });
  }
});

playController.get('/:id/delete', preload(), isOwner(), async (req, res) => {
  await deletePlay(req.params.id);
  res.redirect('/');
});

playController.get('/:id/edit', preload(true), isOwner(), (req, res) => {
  res.render('edit', {
    title: 'Edit Page',
    play: res.locals.play
  });
});

playController.post('/:id/edit', preload(), isOwner(), async (req, res) => {
  const play = res.locals.play;

  try {
    await updatePlay(play, req.body);
    res.redirect(`/play/${req.params.id}`);
  } catch (error) {
    req.body._id = req.params.id;
    res.render('edit', {
      title: 'Edit Page',
      errors: parseError(error),
      play: req.body
    });
  }
});

playController.get('/:id/like', preload(), async (req, res) => {
  const play = res.locals.play;

  if (play.owner.toString() !== req.user._id &&
    play.likes.map(x => x.toString()).includes(req.user._id) === false) {
    await likePlay(play, req.user._id);
  }

  res.redirect(`/play/${req.params.id}`);
});

module.exports = playController;