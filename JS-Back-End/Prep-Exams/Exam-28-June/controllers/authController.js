const authController = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isGuest } = require('../middlewares/guards');
const { register, login } = require('../services/userService');
const { parseError } = require('../utils/parser');


authController.get('/register', isGuest(), (req, res) => {
  res.render('register', {
    title: 'Register Page'
  });
});

authController.post('/register',
  isGuest(),
  body('username')
    .isLength({ min: 3 }).withMessage('Username should be at least 3 characters long')
    .isAlphanumeric().withMessage('Username may contain only english letters and numbers'),
  body('password')
    .isLength({ min: 3 }).withMessage('Password should be at least 3 characters long')
    .isAlphanumeric().withMessage('Password may contain only english letters and numbers'),
  body('repass')
    .custom((repass, { req }) => repass === req.body.password).withMessage('Passwords don\'t match'),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }

      const token = await register(req.body.username, req.body.password);

      res.cookie('token', token);
      res.redirect('/');
    } catch (error) {
      res.render('register', {
        title: 'Register Page',
        errors: parseError(error),
        body: {
          username: req.body.username
        }
      });
    }
  });

authController.get('/login', isGuest(), (req, res) => {
  res.render('login', {
    title: 'Login Page'
  });
});

authController.post('/login', isGuest(), async (req, res) => {
  try {
    const token = await login(req.body.username, req.body.password);

    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    res.render('login', {
      title: 'Login Page',
      errors: parseError(error),
      body: {
        username: req.body.username
      }
    });
  }
});

authController.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

module.exports = authController;