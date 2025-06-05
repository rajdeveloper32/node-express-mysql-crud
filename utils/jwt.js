const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

module.exports = { generateToken };
