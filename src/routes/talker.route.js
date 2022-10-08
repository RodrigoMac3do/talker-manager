const express = require('express');
const controller = require('../controllers');

const router = express.Router();
const middleware = require('../middlewares');

router.get('/', controller.talker.listAll);
router.get('/search', middleware.auth, controller.talker.findByName);
router.get('/:id', controller.talker.findById);

module.exports = router;
