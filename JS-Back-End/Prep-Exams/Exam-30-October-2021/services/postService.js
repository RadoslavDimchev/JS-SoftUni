const Post = require('../models/Post');


async function getAll() {
  return Post.find({}).lean();
}

async function getById(postId) {
  return Post.findById(postId).populate('votes', 'email').lean();
}

async function getByIdRaw(postId) {
  return Post.findById(postId);
}

async function createPost(post) {
  return Post.create(post);
}

async function updatePost(post, data) {
  post.title = data.title;
  post.keyword = data.keyword;
  post.location = data.location;
  post.date = data.date;
  post.description = data.description;

  return post.save();
}

async function deletePost(postId) {
  return Post.findByIdAndDelete(postId);
}

async function upvote(post, userId) {
  post.votes.push(userId);
  post.rating++;
  return post.save();
}

async function downvote(post, userId) {
  post.votes.push(userId);
  post.rating--;
  return post.save();
}

async function getAllMyPosts(userId) {
  return Post.find({owner: userId}).lean();
}

module.exports = {
  getAll,
  getById,
  getByIdRaw,
  createPost,
  updatePost,
  deletePost,
  upvote,
  downvote,
  getAllMyPosts
};