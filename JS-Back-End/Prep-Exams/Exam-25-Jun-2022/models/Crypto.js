const { Schema, model, Types } = require('mongoose');


const cryptoSchema = new Schema({
  name: { type: String, minLength: [2, 'Name should be at least 2 characters'] },
  image: {
    type: String, validate: {
      validator: value => /https?:\/\/.+/.test(value),
      message: 'Invalid image'
    }
  },
  price: { type: Number, required: [true, 'Price must be a positive number'], minValue: [0, 'Price must be a positive number'] },
  description: { type: String, minLength: [10, 'Description should be at least 10 characters'] },
  payment: {
    type: String, required: true, enum: {
      values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
      message: 'Invalid payment method'
    }
  },
  buyers: { type: [Types.ObjectId], ref: 'User', default: [] },
  owner: { type: Types.ObjectId, ref: 'User' },
});

const Crypto = model('Crypto', cryptoSchema);

module.exports = Crypto;