const { Schema, model } = require('mongoose');


const userSchema = new Schema({
  email: { type: String, required: true, unique: true, minLength: [3, 'Email must be at least 3 symbols'] },
  gender: { type: String, required: true, enum: ['male', 'female'] },
  hashedPassword: { type: String, required: true }
});

userSchema.index({ email: 1 }, {
  collation: {
    locale: 'en',
    strength: 2
  }
});

const User = model('User', userSchema);

module.exports = User;