var express = require('express');
var router = express.Router();
var {updateUserInfo} = require('../controllers/TaskControllers/updateUserInfoController');

router.post('/updateUserInfo',updateUserInfo)


module.exports = router;
