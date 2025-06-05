const User = require('../models/user.model');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    const usersWithoutPassword = users.map(user => {
      const userObj = user.toJSON();
      delete userObj.password;
      return userObj;
    });
    res.json({
      success: true,
      message: 'Users fetched successfully',
      data: usersWithoutPassword
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        data: null
      });
    }
    const userObj = user.toJSON();
    delete userObj.password;
    res.json({
      success: true,
      message: 'User fetched successfully',
      data: userObj
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null
    });
  }
};

// Add this function for user creation
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const userObj = user.toJSON();
    delete userObj.password;
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: userObj
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        data: null
      });
    }
    await user.update(req.body);
    const userObj = user.toJSON();
    delete userObj.password;
    res.json({
      success: true,
      message: 'User updated successfully',
      data: userObj
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        data: null
      });
    }
    await user.destroy();
    res.json({
      success: true,
      message: 'User deleted successfully',
      data: null
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null
    });
  }
};
