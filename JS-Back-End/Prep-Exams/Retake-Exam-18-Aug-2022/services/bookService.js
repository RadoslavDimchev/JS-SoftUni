const Book = require("../models/Book");

const getAll = async () => Book.find({}).lean();

const getById = async (id) => Book.findById(id).lean();

const create = async (data) => Book.create(data);

const update = async (id, data) => {
  const existing = await Book.findById(id);

  existing.title = data.title;
  existing.author = data.author;
  existing.genre = data.genre;
  existing.stars = data.stars;
  existing.image = data.image;
  existing.bookReview = data.bookReview;

  return existing.save();
};

const deleteById = async (id) => Book.findByIdAndDelete(id);

const wishBook = async (bookId, userId) => {
  const existing = await Book.findById(bookId);
  existing.wishingList.push(userId);
  return existing.save();
};

const getMyWishedBooks = async (userId) => Book.find({wishingList: userId}).lean();

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  wishBook,
  getMyWishedBooks
};