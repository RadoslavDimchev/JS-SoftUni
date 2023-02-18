const { hasUser } = require('../middlewares/guards');
const { create, getById, joinTrip, deleteById, update } = require('../services/tripService');
const { parseError } = require('../utils/parser');

const tripController = require('express').Router();


tripController.get('/create', hasUser(), (req, res) => {
  res.render('trip-create', {
    title: 'Create Trip'
  });
});

tripController.post('/create', hasUser(), async (req, res) => {
  const trip = {
    startPoint: req.body.startPoint,
    endPoint: req.body.endPoint,
    date: req.body.date,
    time: req.body.time,
    carImage: req.body.carImage,
    carBrand: req.body.carBrand,
    seats: req.body.seats,
    price: req.body.price,
    description: req.body.description,
    owner: req.user._id
  };

  try {
    await create(trip);
    res.redirect('/catalog');
  } catch (error) {
    res.render('trip-create', {
      title: 'Create Offer',
      errors: parseError(error),
      trip
    });
  }
});

tripController.get('/:id', async (req, res) => {
  const trip = await getById(req.params.id);

  if (req.user) {
    trip.isOwner = req.user._id.toString() === trip.owner._id.toString();
    trip.hasJoined = trip.buddies.map(b => b.email).includes(req.user.email);
  }

  trip.buddiesStr = trip.buddies.map(b => b.email).join(', ');

  res.render('trip-details', {
    title: 'Details',
    trip
  });
});

tripController.get('/:id/delete', hasUser(), async (req, res) => {
  const trip = await getById(req.params.id);

  if (trip.owner._id.toString() !== req.user._id.toString()) {
    return res.redirect('/auth/login');
  }

  await deleteById(req.params.id);
  res.redirect('/catalog');
});

tripController.get('/:id/edit', hasUser(), async (req, res) => {
  const trip = await getById(req.params.id);

  if (trip.owner._id.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  res.render('trip-edit', {
    title: 'Edit',
    trip
  });
});

tripController.post('/:id/edit', hasUser(), async (req, res) => {
  const trip = await getById(req.params.id);

  if (trip.owner._id.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  try {
    await update(req.params.id, req.body);
    res.redirect(`/trip/${req.params.id}`);
  } catch (error) {
    res.render('trip-edit', {
      title: 'Edit',
      errors: parseError(error),
      trip: req.body
    });
  }
});

tripController.get('/:id/join', hasUser(), async (req, res) => {
  const trip = await getById(req.params.id);

  if (trip.owner._id.toString() !== req.user._id.toString() &&
    trip.buddies.map(b => b.email).includes(req.user._id.toString()) === false) {
    await joinTrip(req.params.id, req.user._id);
  }

  return res.redirect(`/trip/${req.params.id}`);
});

module.exports = tripController;