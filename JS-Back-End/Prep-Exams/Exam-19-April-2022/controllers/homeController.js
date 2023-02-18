const { getAll, getAllClosed } = require('../services/auctionService');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
});

homeController.get('/catalog', async (req, res) => {
  const auctions = await getAll();

  res.render('catalog', {
    title: 'Catalog',
    auctions
  });
});

homeController.get('/closed-auctions', async (req, res) => {
  const auctions = await getAllClosed();
  console.log(auctions);

  res.render('closed-auctions', {
    title: 'Closed Auctions',
    auctions
  });
});

module.exports = homeController;