var express = require('express');
var router = express.Router();
const {register} = require('../controllers/AuthControllers/registerController');



router.post('/',register);




module.exports = router;