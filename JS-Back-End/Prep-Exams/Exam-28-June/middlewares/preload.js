const { getById, getByIdRaw } = require('../services/playService');


module.exports = (lean) => async (req, res, next) => {
  if (lean) {
    res.locals.play = await getById(req.params.id);
  } else {
    res.locals.play = await getByIdRaw(req.params.id);
  }

  next();
};