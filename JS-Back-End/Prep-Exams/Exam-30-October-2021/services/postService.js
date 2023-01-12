const Post = require('../models/Post');


async function getAll() {
  return Post.find({}).lean();
}

async function getById(postId) {
  return Post.findById(postId).lean();

}

async function createPost(post) {
  return Post.create(post);
}

async function updatePost(post, data) {

}

async function deletePost(postId) {
  return Post.findByIdAndDelete(postId);
}

module.exports = {
  getAll,
  getById,
  createPost,
  updatePost,
  deletePost
};