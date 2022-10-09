const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post('/', middleware.email, middleware.password, controller.login.token);

module.exports = router;
