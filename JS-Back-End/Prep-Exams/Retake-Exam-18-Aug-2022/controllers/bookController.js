const { hasUser } = require('../middlewares/guards');
const { create, getById, wishBook, deleteById, update } = require('../services/bookService');
const { parseError } = require('../utils/parser');

const bookController = require('express').Router();


bookController.get('/create', hasUser(), (req, res) => {
  res.render('create', {
    title: 'Create'
  });
});

bookController.post('/create', hasUser(), async (req, res) => {
  const book = {
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    bookReview: req.body.bookReview,
    genre: req.body.genre,
    stars: req.body.stars,
    owner: req.user._id,
  };

  try {
    await create(book);
    res.redirect('/catalog');
  } catch (error) {
    res.render('create', {
      title: 'Create',
      errors: parseError(error),
      book
    });
  }
});

bookController.get('/:id', async (req, res) => {
  const book = await getById(req.params.id);

  if (req.user) {
    book.isOwner = req.user._id.toString() === book.owner.toString();
    book.hasWished = book.wishingList.map(w => w.toString()).includes(req.user._id.toString());
  }

  res.render('details', {
    title: 'Details',
    book
  });
});

bookController.get('/:id/delete', hasUser(), async (req, res) => {
  const book = await getById(req.params.id);

  if (book.owner.toString() !== req.user._id.toString()) {
    return res.redirect('/auth/login');
  }

  await deleteById(req.params.id);
  res.redirect('/catalog');
});

bookController.get('/:id/edit', hasUser(), async (req, res) => {
  const book = await getById(req.params.id);

  if (book.owner.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  res.render('edit', {
    title: 'Edit',
    book
  });
});

bookController.post('/:id/edit', hasUser(), async (req, res) => {
  const book = await getById(req.params.id);

  if (book.owner.toString() !== req.user._id.toString()) {
    res.redirect('/auth/login');
  }

  try {
    await update(req.params.id, req.body);
    res.redirect(`/book/${req.params.id}`);
  } catch (error) {
    res.render('edit', {
      title: 'Edit',
      errors: parseError(error),
      book: req.body
    });
  }
});

bookController.get('/:id/wish', hasUser(), async (req, res) => {
  const book = await getById(req.params.id);

  if (book.owner.toString() !== req.user._id.toString() &&
    book.wishingList.map(w => w.toString()).includes(req.user._id.toString()) === false) {
    await wishBook(req.params.id, req.user._id);
  }

  return res.redirect(`/book/${req.params.id}`);
});

module.exports = bookController;