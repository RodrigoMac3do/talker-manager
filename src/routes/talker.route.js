const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.talker.listAll);
router.get('/:id', controller.talker.findById);

module.exports = router;
