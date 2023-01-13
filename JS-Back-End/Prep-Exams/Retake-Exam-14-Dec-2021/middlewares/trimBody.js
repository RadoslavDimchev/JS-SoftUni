module.exports = (...exculudedKeys) => (req, res, next) => {
  if (req.body) {
    for (const key in req.body) {
      if (exculudedKeys.includes(key) === false) {
        req.body[key] = req.body[key].trim();
      }
    }
  }

  next();
};