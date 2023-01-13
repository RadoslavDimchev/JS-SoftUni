const Art = require('../models/Art');


async function getAll() {
  return Art.find({}).lean();
}

async function getById(id) {
  return Art.findById(id).populate('owner', 'username').lean();
}

async function getByIdRaw(id) {
  return Art.findById(id);
}

async function createArt(art) {
  return Art.create(art);
}

async function updateArt(art, data) {
  art.title = data.title;
  art.technique = data.technique;
  art.certificate = data.certificate;
  art.picture = data.picture;

  return art.save();
}

async function deleteArt(id) {
  return Art.findByIdAndDelete(id);
}

async function shareArt(art, userId) {
  art.users.push(userId);
  return art.save();
}

module.exports = {
  getAll,
  getById,
  getByIdRaw,
  createArt,
  updateArt,
  deleteArt,
  shareArt
};