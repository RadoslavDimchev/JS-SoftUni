const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'oiasgjhsdhgedrjepioyj5e6';

async function register(username, password, address) {
  const existing = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
  if (existing) {
    throw new Error('Username is taken');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    hashedPassword,
    address
  });

  return createSession(user);
}

async function login(username, password) {
  const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
  if (!user) {
    throw new Error('Incorrect username or password');
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);
  if (!hasMatch) {
    throw new Error('Incorrect username or password');
  }

  return createSession(user);
}

function createSession({ _id, username, address }) {
  const payload = {
    _id,
    username,
    address
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