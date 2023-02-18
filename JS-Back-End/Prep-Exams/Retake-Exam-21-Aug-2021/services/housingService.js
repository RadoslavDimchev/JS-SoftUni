const Housing = require("../models/Housing");


async function getRecent() {
  return Housing.find({}).sort({ createdAt: -1 }).limit(3).lean();
}

async function getAll(search) {
  const query = {};
  if (search) {
    query.type = new RegExp(search, 'i');
  }

  return Housing.find(query).lean();
}

async function createOffer(offer) {
  return Housing.create(offer);
}

async function getById(id) {
  return Housing.findById(id).populate('rented', 'fullName').lean();
}

async function deleteById(id) {
  return Housing.findByIdAndDelete(id);
}

async function updateById(id, data) {
  const existing = await Housing.findById(id);

  existing.name = data.name;
  existing.year = data.year;
  existing.type = data.type;
  existing.city = data.city;
  existing.image = data.image;
  existing.propertyDescription = data.propertyDescription;
  existing.availablePieces = data.availablePieces;

  return existing.save();
}

async function rentHousing(housingId, userId) {
  const existing = await Housing.findById(housingId);
  existing.rented.push(userId);
  existing.availablePieces--;
  return existing.save();
}

module.exports = {
  getRecent,
  getAll,
  createOffer,
  getById,
  deleteById,
  updateById,
  rentHousing
};