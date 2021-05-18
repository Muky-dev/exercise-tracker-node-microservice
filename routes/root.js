const express = require('express');
const controller = require('../controller/root.js');

const router = express.Router();

router.get('/', controller.getIndex);
router.post('/api/users', controller.postUser);

module.exports = router;