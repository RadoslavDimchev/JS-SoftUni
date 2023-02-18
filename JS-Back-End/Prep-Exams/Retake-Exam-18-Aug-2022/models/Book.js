const { Schema, model, Types } = require('mongoose');


const bookSchema = new Schema({
  title: { type: String, minLength: [2, 'Title must be at least 2 characters'] },
  author: { type: String, minLength: [5, 'Title must be at least 5 characters'] },
  image: {
    type: String, validate: {
      validator: value => /https?:\/\/.+/.test(value),
      message: 'Invalid image'
    }
  },
  bookReview: { type: String, required: true, maxLength: [10, 'Review must be at most 10 characters'] },
  genre: { type: String, minLength: [3, 'Genre must be at least 3 characters'] },
  stars: { type: Number, required: true, min: 1, max: 5 },
  wishingList: { type: [Types.ObjectId], ref: 'User', default: [] },
  owner: { type: Types.ObjectId, ref: 'User' },
});

const Book = model('Book', bookSchema);

module.exports = Book;