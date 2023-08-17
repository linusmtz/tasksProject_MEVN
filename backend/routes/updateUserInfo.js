var express = require('express');
var router = express.Router();
var {updateUserInfo} = require('../controllers/updateUserInfoController');

router.post('/updateUserInfo',updateUserInfo)


module.exports = router;
