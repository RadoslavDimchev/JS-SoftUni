const courseController = require('express').Router();

const { createCourse, getById, deleteById, updateById, enrollUser } = require('../services/courseService');
const { parseError } = require('../utils/parser');
const preload = require('../middlewares/preload');
const { isOwner } = require('../middlewares/guards');


courseController.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create Course'
  });
});

courseController.get('/:id', preload(true), async (req, res) => {
  const course = res.locals.course;

  course.isOwner = course.owner.toString() === req.user._id.toString();
  course.enrolled = course.users.map(x => x.toString()).includes(req.user._id.toString());

  res.render('details', {
    title: course.title,
    course
  });
});

courseController.get('/:id/delete', preload(), isOwner(), async (req, res) => {
  await deleteById(req.params.id);
  res.redirect('/');
});

courseController.post('/create', async (req, res) => {
  const course = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    duration: req.body.duration,
    owner: req.user._id,
  };

  try {
    await createCourse(course);
    res.redirect('/');
  } catch (error) {
    res.render('create', {
      title: 'Create Course',
      errors: parseError(error),
      body: course
    });
  }
});

courseController.get('/:id/edit', preload(true), isOwner(), async (req, res) => {
  const course = res.locals.course;

  res.render('edit', {
    title: 'Edit Course',
    course
  });
});

courseController.post('/:id/edit', preload(), isOwner(), async (req, res) => {
  const course = res.locals.course;

  try {
    await updateById(course, req.body);
    res.redirect(`/course/${req.params.id}`);
  } catch (error) {
    res.render('edit', {
      title: 'Edit Course',
      errors: parseError(error),
      course: req.body
    });
  }
});

courseController.get('/:id/enroll', preload(), async (req, res) => {
  const course = res.locals.course;

  if (course.owner.toString() !== req.user._id.toString() &&
    course.users.map(x => x.toString()).includes(req.user._id.toString()) === false) {
    await enrollUser(course, req.user._id);
  }

  return res.redirect(`/course/${req.params.id}`);
});

module.exports = courseController;