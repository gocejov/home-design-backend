const express = require('express');
const {createImage, getImages} = require('../controllers/imageController');

const router = express.Router();

router.get('/images', getImages);
router.post('/images', createImage);

module.exports = router;
