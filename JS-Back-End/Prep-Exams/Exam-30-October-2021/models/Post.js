const { Schema, model, Types } = require('mongoose');


const postSchema = new Schema({
  title: { type: String, required: true },
  keyword: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: Types.ObjectId, required: true },
  votes: { type: [Types.ObjectId], required: true, ref: 'User', default: [] },
  rating: { type: Number, required: true, default: 0 },
});

const Post = model('Post', postSchema);

module.exports = Post;