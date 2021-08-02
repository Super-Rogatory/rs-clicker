const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/weapons', require('./weapons'));

module.exports = router;