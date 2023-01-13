const { Schema, model, Types } = require('mongoose');


const artSchema = new Schema({
  title: { type: String, required: true },
  technique: { type: String, required: [true, 'Technique is required'] },
  picture: { type: String, required: true },
  certificate: { type: String, required: true },
  owner: { type: Types.ObjectId, ref: 'User', required: true },
  users: { type: [Types.ObjectId], ref: 'User', default: [], required: true }
});

const Art = model('Art', artSchema);

module.exports = Art;