const { body } = require('express-validator');
const { User } = require('../models');

exports.registerValidation = [
  body('firstname')
    .notEmpty()
    .withMessage('First name is required'),

  body('lastname')
    .notEmpty()
    .withMessage('Last name is required'),

  body('username')
    .notEmpty()
    .withMessage('Username is required')
    .custom(async (username) => {
      const user = await User.findOne({ where: { username } });
      if (user) {
        throw new Error('Username already in use');
      }
      return true;
    }),

  body('email')
    .isEmail()
    .withMessage('Valid email is required')
    .custom(async (email) => {
      const user = await User.findOne({ where: { email } });
      if (user) {
        throw new Error('Email already in use');
      }
      return true;
    }),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),

  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),
];

exports.loginValidation = [
  body('username')
    .notEmpty()
    .withMessage('Username is required'),

  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];


exports.updateValidation = [
  body('firstname')
    .optional()
    .notEmpty()
    .withMessage('First name cannot be empty'),

  body('lastname')
    .optional()
    .notEmpty()
    .withMessage('Last name cannot be empty'),

  body('username')
    .optional()
    .notEmpty()
    .withMessage('Username cannot be empty')
    .custom(async (username, { req }) => {
      const user = await User.findOne({ where: { username } });
      if (user && user.id !== req.user.id) {
        throw new Error('Username already in use');
      }
      return true;
    }),

  body('email')
    .optional()
    .isEmail()
    .withMessage('Valid email is required')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ where: { email } });
      if (user && user.id !== req.user.id) {
        throw new Error('Email already in use');
      }
      return true;
    }),

  body('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),

  body('confirmPassword')
    .optional()
    .custom((value, { req }) => {
      if (req.body.password && value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),
];

