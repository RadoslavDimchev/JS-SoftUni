const Trip = require("../models/Trip");

const getAll = async () => Trip.find({}).lean();

const getById = async (id) => Trip.findById(id).populate('owner', 'email gender').populate('buddies', 'email').lean();

const create = async (data) => Trip.create(data);

const update = async (id, data) => {
  const existing = await Trip.findById(id);

  existing.startPoint = data.startPoint;
  existing.endPoint = data.endPoint;
  existing.date = data.date;
  existing.time = data.time;
  existing.carImage = data.carImage;
  existing.carBrand = data.carBrand;
  existing.seats = data.seats;
  existing.price = data.price;
  existing.description = data.description;

  return existing.save();
};

const deleteById = async (id) => Trip.findByIdAndDelete(id);

const joinTrip = async (tripId, userEmail) => {
  const existing = await Trip.findById(tripId);
  existing.buddies.push(userEmail);
  existing.seats--;
  return existing.save();
};

const getMyTrips = async (userId) => Trip.find({ owner: userId }).lean();

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  joinTrip,
  getMyTrips
};