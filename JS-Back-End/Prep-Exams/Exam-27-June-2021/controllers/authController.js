const authController = require('express').Router();
const { hasUser, isGuest } = require('../middlewares/guards');
const { register, login } = require('../services/userService');
const { parseError } = require('../utils/parser');


authController.get('/register', isGuest(), (req, res) => {
  res.render('register', {
    title: 'Register Page'
  });
});

authController.post('/register', isGuest(), async (req, res) => {
  try {
    if (/\w+@[a-z]+\.[a-z]+/g.test(req.body.email) === false) {
      throw new Error('Invalid email');
    }
    if(req.body.password.length < 4) {
      throw new Error('Password must be at least 4 characters');
    }
    if (req.body.email === '' || req.body.password === '' || req.body.gender === '') {
      throw new Error('All fields are required');
    }
    if (req.body.password !== req.body.repass) {
      throw new Error('Passwords don\'t match');
    }

    const token = await register(req.body.email, req.body.password, req.body.gender);

    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    res.render('register', {
      title: 'Register Page',
      errors: parseError(error),
      body: {
        email: req.body.email,
        gender: req.body.gender,
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

authController.get('/logout', hasUser(), (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

module.exports = authController;