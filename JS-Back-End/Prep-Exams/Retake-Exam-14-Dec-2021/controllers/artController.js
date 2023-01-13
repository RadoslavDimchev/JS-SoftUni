const artController = require('express').Router();
const { body, validationResult } = require('express-validator');
const preload = require('../middlewares/preload');
const { createArt, deleteArt, updateArt, shareArt } = require('../services/artService');
const { parseError } = require('../utils/parser');


artController.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create Page'
  });
});

artController.get('/:id', preload(true), (req, res) => {
  const art = res.locals.art;

  if (req.user) {
    art.isOwner = req.user._id.toString() === art.owner._id.toString();
    art.hasShared = art.users.map(u => u.toString()).includes(req.user._id.toString());
  }

  res.render('details', {
    title: art.title,
    art
  });
});

artController.post('/create',
  body('title')
    .isLength({ min: 6 }).withMessage('Title should be at least 6 characters long'),
  body('technique')
    .isLength({ max: 15 }).withMessage('Technique should be at most 15 characters long'),
  body('certificate')
    .matches(/^(?:yes|no)$/i).withMessage('Yes or No are only valid'),
  body('picture')
    .matches(/^https?:\/\/.+$/i).withMessage('Invalid pucture, should start with http:// or https://'),
  async (req, res) => {
    const art = {
      title: req.body.title,
      technique: req.body.technique,
      certificate: req.body.certificate,
      picture: req.body.picture,
      owner: req.user._id
    };

    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }

      await createArt(art);

      res.redirect('/gallery');
    } catch (error) {
      res.render('create', {
        title: 'Create Page',
        errors: parseError(error),
        art
      });
    }
  }
);

artController.get('/:id/delete', async (req, res) => {
  await deleteArt(req.params.id);
  res.redirect('/gallery');
});

artController.get('/:id/edit', preload(true), (req, res) => {
  res.render('edit', {
    title: 'Edit Page',
    art: res.locals.art
  });
});

artController.post('/:id/edit',
  preload(),
  body('title')
    .isLength({ min: 6 }).withMessage('Title should be at least 6 characters long'),
  body('technique')
    .isLength({ max: 15 }).withMessage('Technique should be at most 15 characters long'),
  body('certificate')
    .matches(/^(?:yes|no)$/i).withMessage('Yes or No are only valid'),
  body('picture')
    .matches(/^https?:\/\/.+$/i).withMessage('Invalid pucture, should start with http:// or https://'),
  async (req, res) => {
    const art = res.locals.art;

    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }

      await updateArt(art, req.body);

      res.redirect(`/art/${req.params.id}`);
    } catch (error) {
      req.body._id = req.params.id;
      res.render('edit', {
        title: 'Edit Page',
        errors: parseError(error),
        art: req.body
      });
    }
  }
);

artController.get('/:id/share', preload(), async (req, res) => {
  const art = res.locals.art;

  if (art.owner._id.toString() !== req.user._id.toString() &&
    art.users.map(u => u.toString()).includes(req.user._id.toString()) === false) {
    await shareArt(art, req.user._id);
  }

  res.redirect(`/art/${req.params.id}`);
});

module.exports = artController;