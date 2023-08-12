var express = require('express');
var router = express.Router();
const {register} = require('../controllers/registerController');



router.post('/',register);




module.exports = router;