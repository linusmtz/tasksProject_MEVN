var express = require('express');
var router = express.Router();
var {logout} = require('../controllers/AuthControllers/logoutController');



router.get('/',logout);

module.exports = router;
