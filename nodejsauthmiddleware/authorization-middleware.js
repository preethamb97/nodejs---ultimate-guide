const jwt = require('jsonwebtoken');

module.exports = () => {
  return (req, res, next) => {
    console.log('authorization middleware');

    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).send('auth denied');
    } else {
      next();
    }
  };
}