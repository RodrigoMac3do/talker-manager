const express = require('express');
const middleware = require('../middlewares');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.talker.listAll);
router.get('/search', middleware.auth, controller.talker.findByName);
router.get('/:id', controller.talker.findById);

module.exports = router;
