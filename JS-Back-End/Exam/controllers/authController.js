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
    if (req.body.username.length < 2) {
      throw new Error('Username must be at least 2 characters');
    }
    if (req.body.email.length < 10) {
      throw new Error('Email must be at least 10 characters');
    }
    if (req.body.password.length < 4) {
      throw new Error('Password must be at least 4 characters');
    }
    if (req.body.password !== req.body.repass) {
      throw new Error('Passwords don\'t match');
    }

    const token = await register(req.body.email, req.body.password, req.body.username);

    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    res.render('register', {
      title: 'Register',
      errors: parseError(error),
      body: {
        email: req.body.email,
        username: req.body.username,
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
    const token = await login(req.body.username, req.body.password);

    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    res.render('login', {
      title: 'Login',
      errors: parseError(error),
      body: {
        username: req.body.username
      }
    });
  }
});

authController.get('/logout', hasUser(), (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

module.exports = authController;