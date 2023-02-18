const { hasUser } = require('../middlewares/guards');
const { create, getById, bidAuction, deleteById, update, closeAuction } = require('../services/auctionService');
const { parseError } = require('../utils/parser');

const auctionController = require('express').Router();


auctionController.get('/create', hasUser(), (req, res) => {
  res.render('create', {
    title: 'Create'
  });
});

auctionController.post('/create', hasUser(), async (req, res) => {
  const auction = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    owner: req.user._id,
    author: `${req.user.firstName} ${req.user.lastName}`
  };

  try {
    await create(auction);
    res.redirect('/catalog');
  } catch (error) {
    res.render('create', {
      title: 'Create',
      errors: parseError(error),
      auction
    });
  }
});

auctionController.get('/:id', async (req, res) => {
  const auction = await getById(req.params.id);

  if (req.user) {
    auction.isOwner = req.user._id.toString() === auction.owner.toString();
  }
  if (auction.bidder) {
    auction.hasBid = auction.bidder._id == req.user._id;
  }

  res.render('details', {
    title: 'Details',
    auction
  });
});

auctionController.get('/:id/delete', hasUser(), async (req, res) => {
  const auction = await getById(req.params.id);

  if (auction.owner.toString() !== req.user._id.toString()) {
    return res.redirect('/auth/login');
  }

  await deleteById(req.params.id);
  res.redirect('/catalog');
});

auctionController.get('/:id/edit', hasUser(), async (req, res) => {
  const auction = await getById(req.params.id);

  if (auction.owner.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  res.render('edit', {
    title: 'Edit',
    auction
  });
});

auctionController.post('/:id/edit', hasUser(), async (req, res) => {
  const auction = await getById(req.params.id);

  if (auction.owner.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  try {
    await update(req.params.id, req.body);
    res.redirect(`/auction/${req.params.id}`);
  } catch (error) {
    res.render('edit', {
      title: 'Edit',
      errors: parseError(error),
      auction: req.body
    });
  }
});

auctionController.post('/:id/bid', hasUser(), async (req, res) => {
  const auction = await getById(req.params.id);

  try {
    if (auction.bidder && auction.bidder._id == req.user._id) {
      throw new Error('The bidder can\'t be again you');
    }
    if (auction.owner.toString() === req.user._id.toString()) {
      throw new Error('The bidder can\'t be owner');
    }
    if (Number(req.body.amount) <= Number(auction.price)) {
      throw new Error('Bid has to be bigger');
    }

    await bidAuction(req.params.id, req.user._id, req.body.amount);

    res.redirect(`/auction/${req.params.id}`);
  } catch (error) {
    res.render('details', {
      title: 'Details',
      errors: parseError(error),
      auction
    });
  }
});

auctionController.get('/:id/close', async (req, res) => {
  console.log('here');
  const auction = await getById(req.params.id);
  await closeAuction(auction._id);
  res.redirect('/closed-auctions');
});

module.exports = auctionController;