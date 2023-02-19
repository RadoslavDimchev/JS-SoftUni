const { hasUser } = require('../middlewares/guards');
const { create, getById, commentPhoto, deleteById, update } = require('../services/photoService');
const { parseError } = require('../utils/parser');

const photoController = require('express').Router();


photoController.get('/create', hasUser(), (req, res) => {
  res.render('create', {
    title: 'Create'
  });
});

photoController.post('/create', hasUser(), async (req, res) => {
  const photo = {
    name: req.body.name,
    image: req.body.image,
    age: Number(req.body.age),
    description: req.body.description,
    location: req.body.location,
    owner: req.user._id
  };

  try {
    await create(photo);
    res.redirect('/catalog');
  } catch (error) {
    res.render('create', {
      title: 'Create',
      errors: parseError(error),
      photo
    });
  }
});

photoController.get('/:id', async (req, res) => {
  const photo = await getById(req.params.id);

  if (req.user) {
    photo.isOwner = req.user._id.toString() === photo.owner._id.toString();
  }

  res.render('details', {
    title: 'Details',
    photo
  });
});

photoController.get('/:id/delete', hasUser(), async (req, res) => {
  const photo = await getById(req.params.id);

  if (photo.owner._id.toString() !== req.user._id.toString()) {
    return res.redirect('/auth/login');
  }

  await deleteById(req.params.id);
  res.redirect('/catalog');
});

photoController.get('/:id/edit', hasUser(), async (req, res) => {
  const photo = await getById(req.params.id);

  if (photo.owner._id.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  res.render('edit', {
    title: 'Edit',
    photo
  });
});

photoController.post('/:id/edit', hasUser(), async (req, res) => {
  const photo = await getById(req.params.id);

  if (photo.owner._id.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  try {
    await update(req.params.id, req.body);
    res.redirect(`/photo/${req.params.id}`);
  } catch (error) {
    res.render('edit', {
      title: 'Edit',
      errors: parseError(error),
      photo: req.body
    });
  }
});

photoController.post('/:id/comment', hasUser(), async (req, res) => {
  const photo = await getById(req.params.id);

  if (photo.owner._id.toString() !== req.user._id.toString()) {
    await commentPhoto(req.params.id, req.user._id, req.body.comment);
  }

  return res.redirect(`/photo/${req.params.id}`);
});

module.exports = photoController;