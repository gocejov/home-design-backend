const express = require('express');
const {createImage, getImages} = require('../controllers/imageController');
const imageValidator = require('../validators/imageValidator');

const router = express.Router();

router.get('/images', getImages);
router.post('/images', imageValidator, createImage);

module.exports = router;
