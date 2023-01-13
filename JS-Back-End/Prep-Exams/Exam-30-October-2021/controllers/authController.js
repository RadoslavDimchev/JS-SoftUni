const authController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest } = require('../middlewares/guards');

const { register, login } = require('../services/userService');
const { parseError } = require('../utils/parser');


authController.get('/register',
  isGuest(),
  (req, res) => {
    res.render('register', {
      title: 'Register Page'
    });
  });

authController.post('/register',
  isGuest(),
  body('firstName')
    .isLength({ min: 3 }).withMessage('First name should be at least 3 characters long')
    .matches(/^[a-zA-Z]+$/).withMessage('First name may contains only English letters'),
  body('lastName')
    .isLength({ min: 5 }).withMessage('Last name should be at least 5 characters long')
    .matches(/^[a-zA-Z]+$/).withMessage('Last name may contains only English letters'),
  body('email')
    .matches(/^[a-zA-Z]+\@[a-z]+\.[a-z]+$/).withMessage('Invalid email'),
  body('password')
    .isLength({ min: 4 }).withMessage('Password should be at least 4 characters long'),
  body('repass')
    .custom((repass, { req }) => repass === req.body.password).withMessage('Passwords don\'t match'),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }

      const token = await register(req.body);

      res.cookie('token', token);
      res.redirect('/');
    } catch (error) {
      res.render('register', {
        title: 'Register Page',
        errors: parseError(error),
        body: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email
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
    const token = await login(req.body.email, req.body.password);

    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    res.render('login', {
      title: 'Login Page',
      errors: parseError(error),
      body: {
        email: req.body.email
      }
    });
  }
});

authController.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

module.exports = authController;