const { Schema, model, Types } = require('mongoose');


const URL_PATTERN = /https:?\/\/./i;

const courseSchema = new Schema({
  title: { type: String, minLength: [4, 'Course title must be at least 4 characters long'] },
  description: {
    type: String,
    minLength: [20, 'Course description must be at least 20 characters long'],
    maxLength: [50, 'Course description must be at most 50 characters long']
  },
  imageUrl: {
    type: String,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: 'Invalid Image URL'
    }
  },
  duration: { type: String, required: [true, 'Duration is required'] },
  createdAt: { type: String, required: true, default: () => (new Date()).toISOString().slice(0, 10) },
  users: { type: [Types.ObjectId], ref: 'User', default: [] },
  userCount: { type: Number, default: 0 },
  owner: { type: Types.ObjectId, ref: 'User' }
});

courseSchema.index({ title: 1 }, {
  collation: {
    locale: 'en',
    strength: 2
  }
});

const Course = model('Course', courseSchema);

module.exports = Course;