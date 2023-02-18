const { Schema, model, Types } = require('mongoose');


const addSchema = new Schema({
  headline: { type: String, minLength: [4, 'Headline must be at least 4 characters'] },
  location: { type: String, minLength: [8, 'Location must be at least 8 characters'] },
  company: { type: String, minLength: [3, 'Company must be at least 3 characters'] },
  description: { type: String, required: [true, 'Description must be at most 40 characters'], maxLength: [40, 'Description must be at most 40 characters'] },
  owner: { type: Types.ObjectId, ref: 'User' },
  users: { type: [Types.ObjectId], ref: 'User', default: [] },
  usersCount: { type: Number, required: true, default: 0 },
  authorEmail: { type: String, required: true }
});

const Add = model('Add', addSchema);

module.exports = Add;