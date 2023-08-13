var express = require('express');
var router = express.Router();
const {register} = require('../controllers/registerController');



router.post('/',validToken,register);




module.exports = router;