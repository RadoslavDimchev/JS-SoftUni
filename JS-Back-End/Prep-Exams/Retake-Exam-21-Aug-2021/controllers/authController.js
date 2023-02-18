const authController = require('express').Router();
const { isGuest, hasUser } = require('../middlewares/guards');
const { register, login } = require('../services/userService');
const { parseError } = require('../utils/parser');


authController.get('/register', isGuest(), (req, res) => {
  res.render('register', {
    title: 'Register Page'
  });
});

authController.post('/register', isGuest(), async (req, res) => {
  try {
    if (req.body.fullName.split(' ').length !== 2) {
      throw new Error('Fullname is invalid');
    }
    if (req.body.username.length < 5) {
      throw new Error('Username should be at least 4 characters long');
    }
    if (req.body.password.length < 5) {
      throw new Error('Password should be at least 4 characters long');
    }
    if (req.body.password !== req.body.repass) {
      throw new Error('Passwords don\'t match');
    }

    const token = await register(req.body.fullName, req.body.username, req.body.password);

    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    const errors = parseError(error);
    res.render('register', {
      title: 'Register Page',
      errors,
      body: {
        username: req.body.username,
        fullName: req.body.fullName
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
    const errors = parseError(error);

    res.render('login', {
      title: 'Login Page',
      errors,
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