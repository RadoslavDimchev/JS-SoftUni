const Course = require('../models/Course');


async function getAllByDate() {
  return Course.find({}).sort();
}

module.exports = {
  getAllByDate,
};