const { parseError } = require('../utils/parser');
const { body, validationResult } = require('express-validator');
const { createPost, getById, deletePost, updatePost, upvote, downvote } = require('../services/postService');
const preload = require('../middlewares/preload');
const { hasUser, isOwner } = require('../middlewares/guards');

const postController = require('express').Router();


postController.get('/create', hasUser(), (req, res) => {
  res.render('create', {
    title: 'Create Page'
  });
});

postController.post('/create', hasUser(),
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

postController.get('/:id', preload(true), (req, res) => {
  const post = res.locals.post;

  if (req.user) {
    post.isOwner = req.user._id.toString() === post.owner.toString();
    post.hasVoted = post.votes.map(v => v._id.toString()).includes(req.user._id.toString());
  }

  post.votes = post.votes.map(v => v.email).join(', ');

  res.render('details', {
    title: post.title,
    post
  });
});

postController.get('/:id/delete', hasUser(), preload(), isOwner(), async (req, res) => {
  await deletePost(req.params.id);
  res.redirect('/posts');
});

postController.get('/:id/edit', hasUser(), preload(true), isOwner(), (req, res) => {
  res.render('edit', {
    title: 'Edit Page',
    post: res.locals.post
  });
});

postController.post('/:id/edit', hasUser(), preload(), isOwner(), async (req, res) => {
  const post = res.locals.post;

  try {
    await updatePost(post, req.body);
    res.redirect(`/post/${post._id}`);
  } catch (error) {
    res.render('edit', {
      title: 'Edit Page',
      post: req.body
    });
  }
});

postController.get('/:id/upvote', hasUser(), preload(), async (req, res) => {
  const post = res.locals.post;
  await upvote(post, req.user._id);
  res.redirect(`/post/${post._id}`);
});

postController.get('/:id/downvote', hasUser(), preload(), async (req, res) => {
  const post = res.locals.post;
  await downvote(post, req.user._id);
  res.redirect(`/post/${post._id}`);
});

module.exports = postController;