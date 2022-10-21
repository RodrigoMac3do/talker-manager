const express = require('express');
const middleware = require('../middlewares');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.talker.listAll);
router.get('/search', middleware.auth, controller.talker.findByName);
router.get('/:id', controller.talker.findById);
router.post(
  '/',
  middleware.auth,
  middleware.name,
  middleware.age,
  middleware.talk,
  controller.talker.insert,
);

module.exports = router;
