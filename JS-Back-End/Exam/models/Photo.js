const { Schema, model, Types } = require('mongoose');


const photoSchema = new Schema({
  name: { type: String, minLength: [2, 'Name must be at least 2 characters'] },
  image: {
    type: String, validate: {
      validator: value => /https?:\/\/.+/.test(value),
      message: 'Invalid image'
    }
  },
  age: { type: Number,  min: [1, 'Age must be at least 1 character'], max: [100, 'Age must be at most 100 characters'] },
  description: { type: String, minLength: [5, 'Description must be at least 5 characters'], maxLength: [50, 'Description must be at most 50 characters'] },
  location: { type: String, minLength: [5, 'Location must be at least 5 characters'], maxLength: [50, 'Location must be at most 50 characters'] },
  commentList: {
    type: [{
      userId: { type: Types.ObjectId, ref: 'User' },
      comment: String
    }], default: []
  },
  owner: { type: Types.ObjectId, ref: 'User' },
});

const Photo = model('Photo', photoSchema);

module.exports = Photo;