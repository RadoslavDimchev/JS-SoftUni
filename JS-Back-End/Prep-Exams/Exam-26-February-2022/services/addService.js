const Add = require("../models/Add");

const getAll = async (search, limit) => {
  const query = {};
  if (search) {
    query.authorEmail = new RegExp(search, 'i');
  }
  if (limit) {
    return Add.find(query).limit(limit).lean();
  }
  return Add.find(query).lean();
};

const getById = async (id) => Add.findById(id).populate('owner', 'email').populate('users', 'email description').lean();

const create = async (data) => Add.create(data);

const update = async (id, data) => {
  const existing = await Add.findById(id);

  existing.headline = data.headline;
  existing.location = data.location;
  existing.company = data.company;
  existing.description = data.description;

  return existing.save();
};

const deleteById = async (id) => Add.findByIdAndDelete(id);

const applyAdd = async (addId, userId) => {
  const existing = await Add.findById(addId);
  existing.users.push(userId);
  existing.usersCount++;
  return existing.save();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  applyAdd,
};