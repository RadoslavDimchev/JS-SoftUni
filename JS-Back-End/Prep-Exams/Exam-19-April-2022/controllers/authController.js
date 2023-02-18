const authController = require('express').Router();
const { hasUser, isGuest } = require('../middlewares/guards');
const { register, login } = require('../services/userService');
const { parseError } = require('../utils/parser');


authController.get('/register', isGuest(), (req, res) => {
  res.render('register', {
    title: 'Register'
  });
});

authController.post('/register', isGuest(), async (req, res) => {
  try {
    if (/[a-z]+\@[a-z]+\.[a-z]+/.test(req.body.email) === false) {
      throw new Error('Invalid email');
    }
    if (req.body.password.length < 5) {
      throw new Error('Password have to be at least 5 characters');
    }
    if (req.body.firstName.length < 1) {
      throw new Error('First Name have to be at least 1 characters');
    }
    if (req.body.lastName.length < 1) {
      throw new Error('Last Name have to be at least 1 characters');
    }
    if (req.body.password !== req.body.repass) {
      throw new Error('Passwords don\'t match');
    }

    const token = await register(req.body.email, req.body.password, req.body.firstName, req.body.lastName);

    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    res.render('register', {
      title: 'Register',
      errors: parseError(error),
      body: {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      }
    });
  }
});

authController.get('/login', isGuest(), (req, res) => {
  res.render('login', {
    title: 'Login'
  });
});

authController.post('/login', isGuest(), async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);

    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    res.render('login', {
      title: 'Login',
      errors: parseError(error),
      body: {
        email: req.body.email
      }
    });
  }
});

authController.get('/logout', hasUser(), (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

module.exports = authController;