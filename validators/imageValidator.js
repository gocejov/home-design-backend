const { body } = require('express-validator');

const imageValidator = [
  body('name').isEmpty().withMessage('Name is invalid'),
  body('path').isEmpty().withMessage('Email is invalid'),
];

module.exports = imageValidator;