function hasUser() {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect('/auth/login');
    }
  };
}

function isGuest() {
  return (req, res, next) => {
    if (!req.user) {
      next();
    } else {
      res.redirect('/');
    }
  };
}

function isOwner() {
  return (req, res, next) => {
    if (req.user._id.toString() === res.locals.art.owner._id.toString()) {
      next();
    } else {
      res.redirect('/auth/login');
    }
  };
}

module.exports = {
  hasUser,
  isGuest,
  isOwner
};