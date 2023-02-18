const { hasUser } = require('../middlewares/guards');
const { createOffer, getById, deleteById, updateById, rentHousing } = require('../services/housingService');
const { parseError } = require('../utils/parser');

const housingController = require('express').Router();


housingController.get('/create', hasUser(), (req, res) => {
  res.render('create', {
    title: 'Create Offer'
  });
});

housingController.get('/:id', async (req, res) => {
  const housing = await getById(req.params.id);

  if (req.user) {
    housing.isOwner = housing.owner.toString() === req.user._id.toString();
    housing.isRented = housing.rented.map(x => x.fullName).includes(req.user.fullName.toString());
    housing.rentedStr = housing.rented.map(x => x.fullName).join(', ');
  }

  res.render('details', {
    title: housing.name,
    housing
  });
});

housingController.get('/:id/delete', hasUser(), async (req, res) => {
  const housing = await getById(req.params.id);

  if (housing.owner.toString() !== req.user._id.toString()) {
    return res.redirect('/auth/login');
  }

  await deleteById(req.params.id);
  res.redirect('/housings');
});

housingController.get('/:id/edit', hasUser(), async (req, res) => {
  const housing = await getById(req.params.id);

  if (housing.owner.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  res.render('edit', {
    title: 'Edit',
    housing
  });
});

housingController.post('/:id/edit', hasUser(), async (req, res) => {
  const housing = await getById(req.params.id);

  if (housing.owner.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  try {
    await updateById(req.params.id, req.body);
    res.redirect(`/housing/${req.params.id}`);
  } catch (error) {
    res.render('create', {
      title: 'Edit',
      errors: parseError(error),
      housing: req.body
    });
  }
});

housingController.post('/create', hasUser(), async (req, res) => {
  const offer = {
    name: req.body.name,
    year: req.body.year,
    type: req.body.type,
    city: req.body.city,
    image: req.body.image,
    propertyDescription: req.body.propertyDescription,
    availablePieces: req.body.availablePieces,
    owner: req.user
  };

  try {
    await createOffer(offer);
    res.redirect('/housings');
  } catch (error) {
    res.render('create', {
      title: 'Create Offer',
      errors: parseError(error),
      body: offer
    });
  }
});

housingController.get('/:id/rent', hasUser(), async (req, res) => {
  const housing = await getById(req.params.id);

  if (housing.owner.toString() !== req.user._id.toString() &&
    housing.rented.map(x => x.toString()).includes(req.user._id.toString()) === false) {
    await rentHousing(req.params.id, req.user._id);
  }

  return res.redirect(`/housing/${req.params.id}`);
});

module.exports = housingController;