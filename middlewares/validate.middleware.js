const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array({ onlyFirstError: true })[0];
    return res.status(400).json({
      success: false,
      field: firstError?.path,
      message: firstError?.msg
    });
  }
  next();
};
