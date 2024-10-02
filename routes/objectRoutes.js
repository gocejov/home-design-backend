const express = require('express');
const { addObjectItem, getObjectItems, editObjectItem } = require('../controllers/objectItemController');
const objectItemValidator = require("../validators/objectItemValidator")

const router = express.Router();

router.get('/objects', getObjectItems);
router.post('/objects', objectItemValidator ,addObjectItem);
router.put('/objects/:id', objectItemValidator ,editObjectItem);

module.exports = router;
