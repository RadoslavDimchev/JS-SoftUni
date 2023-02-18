const Auction = require("../models/Auction");

const getAll = async () => Auction.find({}).lean();

const getById = async (id) => Auction.findById(id).populate('bidder').lean();

const create = async (data) => Auction.create(data);

const update = async (id, data) => {
  const existing = await Auction.findById(id);

  existing.title = data.title;
  existing.description = data.description;
  existing.category = data.category;
  existing.imageUrl = data.imageUrl;
  existing.price = data.price;

  return existing.save();
};

const deleteById = async (id) => Auction.findByIdAndDelete(id);

const bidAuction = async (auctionId, userId, amount) => {
  const existing = await Auction.findById(auctionId);
  existing.bidder = userId;
  existing.price = amount;
  return existing.save();
};

const closeAuction = async (auctionId) => {
  const existing = await Auction.findById(auctionId);
  existing.close = true;
  return existing.save();
};

const getAllClosed = async () => Auction.find({close: true}).populate('bidder').lean();

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  bidAuction,
  closeAuction,
  getAllClosed
};