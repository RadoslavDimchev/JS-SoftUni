const { verifyToken } = require('../services/userService');


module.exports = () => (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const userData = verifyToken(token);
      req.user = userData;
      res.locals.user = userData;
    } catch (error) {
      res.clearToken('token');
      res.redirect('/auth/login');
      return;
    }
  }

  next();
};