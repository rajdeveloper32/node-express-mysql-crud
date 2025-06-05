const express = require('express');
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');
const { updateValidation } = require('../validators/auth.validator');

const validate = require('../middlewares/validate.middleware');

const router = express.Router();

router.use(auth);

router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateValidation, validate, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
