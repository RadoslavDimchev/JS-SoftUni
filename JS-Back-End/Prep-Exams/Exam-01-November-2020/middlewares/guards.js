function hasUser() {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.refirect('/auth/login');
    }
  };
}

function isGuest() {
  return (req, res, next) => {
    if (req.user) {
      res.refirect('/');
    } else {
      next();
    }
  };
}

module.exports = {
  hasUser,
  isGuest
};