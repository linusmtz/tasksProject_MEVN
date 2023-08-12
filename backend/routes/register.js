var express = require('express');
var router = express.Router();
const {register} = require('../controllers/registerController');
const {validToken} = require('../middleware/generateToken');



router.post('/',validToken,register);




module.exports = router;