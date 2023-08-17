var express = require('express');
var router = express.Router();
var {logout} = require('../controllers/logoutController');



router.get('/logout',logout);

module.exports = router;
