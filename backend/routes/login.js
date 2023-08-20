var express = require('express');
var router = express.Router();
const {login} = require('../controllers/AuthControllers/loginController');

router.post('/',login);

module.exports = router;