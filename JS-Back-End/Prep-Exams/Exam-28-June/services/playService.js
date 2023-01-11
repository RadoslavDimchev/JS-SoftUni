const Play = require('../models/Play');


async function getAllByLikes() {
  return Play.find({ isPublic: true }).sort({ likesCount: -1 }).limit(3).lean();
}

async function getAllByDate() {
  return Play.find({ isPublic: true }).sort({ createdAt: -1 }).lean();
}

async function createPlay(play) {
  return Play.create(play);
}

async function getById(id) {
  return Play.findById(id).lean();
}

async function getByIdRaw(id) {
  return Play.findById(id);
}

async function deletePlay(id) {
  return Play.findByIdAndDelete(id);
}

async function updatePlay(play, data) {
  play.title = data.title;
  play.description = data.description;
  play.imageUrl = data.imageUrl;
  play.isPublic = !!data.isPublic;

  return play.save();
}

async function likePlay(play, userId) {
  play.likes.push(userId);
  play.likesCount++;
  return play.save();
}

async function getAllNewest() {
  return Play.find({ isPublic: true }).sort({ createdAt: 1 }).lean();
}

async function getAllMostLiked() {
  return Play.find({ isPublic: true }).sort({ likesCount: -1 }).lean();
}

module.exports = {
  getAllByLikes,
  getAllByDate,
  createPlay,
  getById,
  getByIdRaw,
  deletePlay,
  updatePlay,
  likePlay,
  getAllNewest,
  getAllMostLiked
};