const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const JWT_SECRET = 'sodiljsdfh2345do';

async function register(email, password, username) {
  const exsistingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
  if (exsistingEmail) {
    throw new Error('Email is taken');
  }
  const exsistingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
  if (exsistingUsername) {
    throw new Error('Username is taken');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    hashedPassword,
    username
  });

  return createSession(user);
}

async function login(username, password) {
  const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
  if (!user) {
    throw new Error('Incorrect username or password');
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);
  if (hasMatch === false) {
    throw new Error('Incorrect username or password');
  }

  return createSession(user);
}

function createSession({ _id, email, username }) {
  const payload = {
    _id,
    email,
    username
  };

  return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  register,
  login,
  verifyToken
};