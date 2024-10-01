const express = require('express');
const { addObjectItem, getObjectItems } = require('../controllers/objectItemController');

const router = express.Router();

router.get('/objects', getObjectItems);
router.post('/objects', addObjectItem);

module.exports = router;
