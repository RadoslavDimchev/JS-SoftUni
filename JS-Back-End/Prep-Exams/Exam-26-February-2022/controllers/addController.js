const { hasUser } = require('../middlewares/guards');
const { create, getById, applyAdd, deleteById, update } = require('../services/addService');
const { parseError } = require('../utils/parser');

const addController = require('express').Router();


addController.get('/create', hasUser(), (req, res) => {
  res.render('create', {
    title: 'Create'
  });
});

addController.post('/create', hasUser(), async (req, res) => {
  const add = {
    headline: req.body.headline,
    location: req.body.location,
    company: req.body.company,
    description: req.body.description,
    owner: req.user._id,
    authorEmail: req.user.email
  };

  try {
    await create(add);
    res.redirect('/catalog');
  } catch (error) {
    res.render('create', {
      title: 'Create',
      errors: parseError(error),
      add
    });
  }
});

addController.get('/:id', async (req, res) => {
  const add = await getById(req.params.id);

  console.log(add);

  if (req.user) {
    add.isOwner = req.user._id.toString() === add.owner._id.toString();
    add.hasApplied = add.users.map(b => b._id.toString()).includes(req.user._id.toString());
  }

  res.render('details', {
    title: 'Details',
    add
  });
});

addController.get('/:id/delete', hasUser(), async (req, res) => {
  const trip = await getById(req.params.id);

  if (trip.owner._id.toString() !== req.user._id.toString()) {
    return res.redirect('/auth/login');
  }

  await deleteById(req.params.id);
  res.redirect('/catalog');
});

addController.get('/:id/edit', hasUser(), async (req, res) => {
  const add = await getById(req.params.id);

  if (add.owner._id.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  res.render('edit', {
    title: 'Edit',
    add
  });
});

addController.post('/:id/edit', hasUser(), async (req, res) => {
  const add = await getById(req.params.id);

  if (add.owner._id.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  try {
    await update(req.params.id, req.body);
    res.redirect(`/add/${req.params.id}`);
  } catch (error) {
    res.render('edit', {
      title: 'Edit',
      errors: parseError(error),
      add: req.body
    });
  }
});

addController.get('/:id/apply', hasUser(), async (req, res) => {
  const add = await getById(req.params.id);

  if (add._id.toString() !== req.user._id.toString() &&
    add.users.map(u => u._id.toString()).includes(req.user._id.toString()) === false) {
    await applyAdd(req.params.id, req.user._id);
  }

  return res.redirect(`/add/${req.params.id}`);
});

module.exports = addController;