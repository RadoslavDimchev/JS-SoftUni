const Crypto = require("../models/Crypto");

const getAll = async (search, payment) => {
  const query = {};
  if (search) {
    query.name = search.toLowerCase();
  }
  if (payment) {
    query.payment = payment;
  }

  return Crypto.find(query).lean();
};

const getById = async (id) => Crypto.findById(id).lean();

const create = async (data) => Crypto.create(data);

const update = async (id, data) => {
  const existing = await Crypto.findById(id);

  existing.name = data.name;
  existing.image = data.image;
  existing.price = data.price;
  existing.description = data.description;
  existing.payment = data.payment;

  return existing.save();
};

const deleteById = async (id) => Crypto.findByIdAndDelete(id);

const buyCrypto = async (cyprtoId, userId) => {
  const existing = await Crypto.findById(cyprtoId);
  existing.buyers.push(userId);
  return existing.save();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  buyCrypto,
};