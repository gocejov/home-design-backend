const { body } = require('express-validator');

const objectItemValidator = [
  body('path').isEmpty().withMessage('Path is invalid'),
];

module.exports = objectItemValidator;