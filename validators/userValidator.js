const { body } = require('express-validator');

const userValidator = [
  body('name').isEmpty().withMessage('Name is invalid'),
  body('email').isEmail().withMessage('Email is invalid'),
];

module.exports = userValidator;