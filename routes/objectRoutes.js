const express = require('express');
const { addObjectItem, getObjectItems } = require('../controllers/objectItemController');
const objectItemValidator = require("../validators/objectItemValidator")

const router = express.Router();

router.get('/objects', getObjectItems);
router.post('/objects', objectItemValidator ,addObjectItem);

module.exports = router;
