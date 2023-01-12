const { parseError } = require('../utils/parser');
const { body, validationResult } = require('express-validator');
const { createPost, getById } = require('../services/postService');

const postController = require('express').Router();


postController.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create Page'
  });
});

postController.post('/create',
  body('title')
    .isLength({ min: 6 }).withMessage('Title should be at least 6 characters long'),
  body('keyword')
    .isLength({ min: 6 }).withMessage('Keyword should be at least 6 characters long'),
  body('location')
    .isLength({ max: 15 }).withMessage('Location should be at most 15 characters long'),
  body('date')
    .isLength({ min: 10, max: 10 }).withMessage('Date should be exactly 10 characters long'),
  body('image')
    .matches(/^https?:\/\/.+$/).withMessage('Invalid image URL'),
  body('description')
    .isLength({ min: 8 }).withMessage('Description should be at least 8 characters long'),
  async (req, res) => {
    const post = {
      title: req.body.title,
      keyword: req.body.keyword,
      location: req.body.location,
      date: req.body.date,
      image: req.body.image,
      description: req.body.description,
      owner: req.user._id,
    };

    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }

      await createPost(post);

      res.redirect('/posts');
    } catch (error) {
      res.render('create', {
        title: 'Create Page',
        errors: parseError(error)
      });
    }
  });

postController.get('/:id', async (req, res) => {
  const post = await getById(req.params.id);

  if (req.user) {
    post.isOwner = req.user._id.toString() === post.owner.toString();
    post.hasVoted = post.votes.map(v => v.toString()).includes(req.user._id.toString());
  }

  res.render('details', {
    title: post.title,
    post
  });
});

module.exports = postController;