const { Router } = require('express');
const routes = require('./index');

const router = Router();

router.use('/talker', routes.talker);

router.use('/login', routes.login);

module.exports = router;
