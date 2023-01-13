const { getById, getByIdRaw } = require('../services/postService');


module.exports = (lean) => async (req, res, next) => {
  if (lean) {
    res.locals.post = await getById(req.params.id);
  } else {
    res.locals.post = await getByIdRaw(req.params.id);
  }

  next();
};