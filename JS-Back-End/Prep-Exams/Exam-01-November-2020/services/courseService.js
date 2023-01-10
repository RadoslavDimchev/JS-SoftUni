const Course = require('../models/Course');


async function getAllByDate(search) {
  const query = {};
  if (search) {
    query.title = new RegExp(search, 'i');
  }
  return Course.find(query).sort({ createdAt: 1 }).lean();
}

async function getRecent() {
  return Course.find({}).sort({ userCount: -1 }).limit(3).lean();
}

async function createCourse(course) {
  return Course.create(course);
}

async function getById(id) {
  return Course.findById(id).lean();
}

async function getByIdRaw(id) {
  return Course.findById(id);
}

async function deleteById(id) {
  return Course.findByIdAndDelete(id);
}

async function updateById(course, data) {
  course.title = data.title;
  course.description = data.description;
  course.imageUrl = data.imageUrl;
  course.duration = data.duration;

  return course.save();
}

async function enrollUser(course, userId) {
  course.users.push(userId);
  course.userCount++;
  return course.save();
}

module.exports = {
  getAllByDate,
  getRecent,
  createCourse,
  getById,
  getByIdRaw,
  deleteById,
  updateById,
  enrollUser
};