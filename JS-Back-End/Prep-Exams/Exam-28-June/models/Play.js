const { Schema, model, Types } = require('mongoose');


const playSchema = new Schema({
  title: { type: String, required: [true, 'Title is required'], unique: true },
  description: { type: String, required: [true, 'Description is required'], maxLength: [50, 'Description must be at most 50 symbols'] },
  imageUrl: { type: String, required: [true, 'Image URL is required'] },
  isPublic: { type: Boolean, required: true, default: false },
  createdAt: { type: String, required: true, default: () => (new Date()).toISOString().slice(0, 10) },
  likes: { type: [Types.ObjectId], required: true, ref: 'User', default: [] },
  likesCount: { type: Number, required: true, default: 0 },
  owner: { type: Types.ObjectId, required: true, ref: 'User' }
});

playSchema.index({ title: 1 }, {
  collation: {
    locale: 'en',
    strength: 2
  }
});

const Play = model('Play', playSchema);

module.exports = Play;