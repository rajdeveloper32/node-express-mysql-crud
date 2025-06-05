const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { generateToken } = require('../utils/jwt');

exports.register = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ firstname, lastname, username, email, password: hash });
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: ''
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username) {
      return res.status(400).json({
        success: false,
        message: 'Username is required',
        data: null
      });
    }

    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
        data: null
      });
    }

    const token = generateToken({ id: user.id, email: user.email });
    res.json({
      success: true,
      message: 'Login successful',
      data: { token }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null
    });
  }
};
