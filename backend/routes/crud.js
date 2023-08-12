var express = require('express');
var router = express.Router();
const {validToken} = require('../middleware/generateToken');


router.get('/',validToken,(req,res)=>{
    res.status(200).send({ok:true});
});



module.exports = router;

