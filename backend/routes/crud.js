var express = require('express');
var router = express.Router();

// route create
router.post('/create',(req,res)=>{
    res.status(200).send({ok:true})
})



module.exports = router;

