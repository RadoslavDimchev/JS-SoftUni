const { getById, getByIdRaw } = require('../services/artService');


module.exports = (lean) => async (req, res, next) => {
  if (lean) {
    res.locals.art = await getById(req.params.id);
  } else {
    res.locals.art = await getByIdRaw(req.params.id);
  }

  next();
};