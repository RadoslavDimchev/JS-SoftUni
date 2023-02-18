const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const JWT_SECRET = 'sodiljsdfh2345do';

async function register(email, password, description) {
  const exsisting = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
  if (exsisting) {
    throw new Error('Email is taken');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    hashedPassword,
    description
  });

  return createSession(user);
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
  if (!user) {
    throw new Error('Incorrect email or password');
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);
  if (hasMatch === false) {
    throw new Error('Incorrect email or password');
  }

  return createSession(user);
}

function createSession({ _id, email, description }) {
  const payload = {
    _id,
    email,
    description
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