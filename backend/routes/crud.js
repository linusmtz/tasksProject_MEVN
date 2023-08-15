var express = require('express');
var router = express.Router();
const {validToken} = require('../middleware/generateToken');
const {getAllUserTasks,getUserByTitle} = require('../controllers/searchingControllers');



router.get('/',validToken,(req,res)=>{
    res.status(200).send({ok:true});
});

router.get('/tasks',validToken,getAllUserTasks);
router.get('/tasks/name',validToken,getUserByTitle)

/*
router.get('/task')


router.post('/task',validToken,createTaskController);
router.put('/tasks');
router.delete('/tasks');

*/

module.exports = router;

