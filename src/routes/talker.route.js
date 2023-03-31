const express = require('express');
const middleware = require('../middlewares');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.talker.findAll);

router.get('/search', middleware.auth, controller.talker.findByName);

router.get('/:id', controller.talker.findById);

router.post('/', middleware.auth, controller.talker.create);

router.delete('/:id', middleware.auth, controller.talker.remove);

module.exports = router;
